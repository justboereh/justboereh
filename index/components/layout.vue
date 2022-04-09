<template>
  <div class="w-screen h-screen top-0 overflow-hidden font-light">
    <div ref="paddingdiv" class="h-14 md:h-20 w-screen"></div>

    <main
      id="main-content"
      ref="main"
      class="w-screen h-screen overflow-x-hidden scroll-smooth main-main"
      @scroll="scrollEvent"
    >
      <slot class="overflow-y-auto" keep-alive />
    </main>

    <PopoutMobile />

    <NavbarMain :homepage="homepage" />
  </div>
</template>

<script>
export default {
  props: {
    homepage: {
      type: String,
      default: () => '/',
    },
  },
  data() {
    return {
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
    if (location.hash && document.querySelector(location.hash)) {
      document.querySelector(location.hash).scrollIntoView({
        behavior: 'smooth',
      })
    }
  },
  methods: {
    scrollEvent({ target }) {
      this.$store.commit('content/scrollTop', target.scrollTop)

      if (target.scrollTop - this.lastscrolledy <= 0 || target.scrollTop < 1) {
        this.$store.commit('topbar/setHide', false)
      } else {
        this.$store.commit('topbar/setHide', true)
      }

      this.lastscrolledy = target.scrollTop
    },
  },
}
</script>

<style>
@media (min-width: 640px) {
  .main-main {
    scrollbar-width: thin;
    scrollbar-color: #f79226;
  }

  .main-main::-webkit-scrollbar {
    width: 0.69rem;
  }
}

.main-main::-webkit-scrollbar-thumb {
  background-color: #f79226;
  border-radius: 0.25rem;
}
</style>
