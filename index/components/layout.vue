<template>
  <div class="w-screen h-screen overflow-hidden font-light">
    <div ref="paddingdiv" class="h-14 md:h-20 w-screen"></div>

    <main
      class="w-screen h-screen overflow-x-hidden dark:text-gray-100"
      @scroll="scrollEvent"
    >
      <slot class="overflow-y-auto" keep-alive />
    </main>

    <span :class="scrolltotopclass + ' md:hidden'" @click="scrolltotop">
      <i class="ri-arrow-up-line text-gray-100"></i>
    </span>

    <PopoutMobile />

    <NavbarMain :homepage="homepage" />
  </div>
</template>

<script>
import thememode from '../scripts/thememode'

const scrolltotopclass =
  'absolute bottom-0 right-0 m-2 px-2 py-1 rounded-lg transition duration-200'

export default {
  props: {
    homepage: {
      type: String,
      default: () => '/',
    },
  },
  data() {
    return {
      scrolltotopclass:
        scrolltotopclass + ' opacity-0 bg-primary pointer-events-none',
      hidescrollnum: 0,
      lastscrolledy: 0,
    }
  },
  computed: {
    hidenavbar() {
      return this.$store.state.topbar.hide
    },
  },
  watch: {
    hidenavbar(val) {
      const navbarHeight = document.querySelector('nav').offsetHeight

      this.$anime({
        targets: this.$refs.paddingdiv,
        height: val ? 0 : navbarHeight,
        duration: 250,
        easing: 'cubicBezier(0.4, 0, 0.2, 1)',
      })
    },
  },
  mounted() {
    thememode()

    if (location.hash && document.querySelector(location.hash)) {
      document.querySelector(location.hash).scrollIntoView({
        behavior: 'smooth',
      })
    }
  },
  methods: {
    scrolltotop() {
      this.$refs.main.scrollTo(0, 0)
    },
    scrollEvent({ target }) {
      const newscrollnum = Math.random()
      this.hidescrollnum = newscrollnum

      this.$store.commit('content/scrollTop', target.scrollTop)

      setTimeout(() => {
        if (newscrollnum !== this.hidescrollnum || target.scrollTop < 80) return
        this.scrolltotopclass = `${scrolltotopclass} bg-primary/10`
      }, 2000)

      this.scrolltotopclass = `${scrolltotopclass} ${
        target.scrollTop >= 80 ? 'bg-primary' : 'opacity-0 pointer-events-none'
      }`

      if (target.scrollTop - this.lastscrolledy <= 0 || target.scrollTop < 1) {
        this.$store.commit('topbar/setHide', false)

        this.toppadding = 'h-14 sm:h-20'
      } else {
        this.$store.commit('topbar/setHide', true)

        this.toppadding = 'h-0'
      }

      this.lastscrolledy = target.scrollTop
    },
  },
}
</script>
