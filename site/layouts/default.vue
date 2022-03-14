<template>
  <div
    ref="main"
    class="w-screen h-screen overflow-x-hidden dark:text-gray-100"
  >
    <NavbarMain />

    <main class="pt-14 sm:pt-20 dark:text-gray-100">
      <Nuxt />
    </main>

    <PopoutMobile />
  </div>
</template>

<script>
import thememode from '../scripts/thememode'

const divclass =
  'relative bg-gray-100 dark:bg-gray-900 dark:text-gray-100 h-screen w-screen max-h-screen max-w-screen overflow-hidden'
const scrolltotopclass =
  'absolute bottom-0 right-0 m-2 px-2 py-1 rounded-lg transition duration-200'

export default {
  data() {
    return {
      divclass,
      scrolltotopclass,
      hidescrollnum: 0,
      lastscrolledy: 0,
    }
  },
  mounted() {
    thememode()

    this.$refs.main.addEventListener('scroll', this.scrollEvent)

    if (location.hash && document.querySelector(location.hash)) {
      document.querySelector(location.hash).scrollIntoView({
        behavior: 'smooth',
      })
    }
  },
  beforeDestroy() {
    this.$refs.main.removeEventListener('scroll', this.scrollEvent)
  },
  methods: {
    scrolltotop() {},
    scrollEvent({ target }) {
      const newscrollnum = Math.random()
      this.hidescrollnum = newscrollnum

      this.$store.commit('lastscrolledy/set', target.scrollTop)

      setTimeout(() => {
        if (newscrollnum !== this.hidescrollnum || target.scrollTop < 80) return
        this.scrolltotopclass = `${scrolltotopclass} bg-primary/10`
      }, 2000)

      this.scrolltotopclass = `${scrolltotopclass}${
        target.scrollTop < 80
          ? ' opacity-0 bg-primary pointer-events-none'
          : ' bg-primary '
      }`

      if (
        target.scrollTop - this.lastscrolledy <= 0 ||
        !target.scrollTop >= 80
      ) {
        this.$store.commit('topbar/setHide', false)
      } else {
        this.$store.commit('topbar/setHide', true)
      }

      this.lastscrolledy = target.scrollTop
    },
  },
}
</script>
