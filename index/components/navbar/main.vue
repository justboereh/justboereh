<template>
  <nav
    ref="navbar"
    class="'bg-gray-900 text-gray-100 w-screen top-0 h-14 sm:h-20 fixed border-b transition duration-200 bg-gray-900 border-gray-800 transform"
  >
    <div class="flex w-screen h-full items-center px-1">
      <img
        src="/logo-long.svg"
        alt="long version of logo"
        class="h-8 px-2 hidden sm:block"
        @click="gohome"
      />
      <img
        src="/logo-short-white.svg"
        alt="short version of logo"
        class="h-6 px-2 sm:hidden"
        @click="gohome"
      />

      <span class="flex-1"></span>

      <span :class="navbarmenuclass" @click="menuclicked"></span>
    </div>
  </nav>
</template>

<script>
const anime = require('animejs');

const navbarmenu = 'px-2 py-1 transition duration-200 delay-100'

export default {
  props: {
    homepage: {
      type: String,
      default: () => '/',
    },
  },
  computed: {
    navbarmenuclass() {
      const popoutshown = this.$store.state.topbar.showPopout

      return `${navbarmenu} ${popoutshown ? 'ri-close-line' : 'ri-menu-line'}`
    },
    hide() {
      return this.$store.state.topbar.hide
    },
  },
  watch: {
    hide(val) {
      const navbarHeight = this.$refs.navbar.offsetHeight

      anime({
        targets: this.$refs.navbar,
        translateY: val ? -navbarHeight : 0,
        duration: 250,
      })
    },
  },
  methods: {
    popoutshown() {
      return this.$store.state.topbar.showPopout
    },
    menuclicked() {
      this.$store.commit(
        'content/isPoppedout',
        !this.$store.state.content.isPoppedout
      )
    },
    gohome() {
      if (this.$route.path === this.homepage) return

      this.$router.replace(this.homepage)
    },
  },
}
</script>
