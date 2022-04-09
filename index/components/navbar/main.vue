<template>
  <nav
    ref="navbar"
    class="'w-screen top-0 h-14 md:h-20 fixed border-b border-gray-300"
  >
    <div class="flex w-screen h-full items-center px-1">
      <img
        src="/img/logo-long.svg"
        alt="long version of logo"
        class="h-8 px-3 hidden sm:block"
        @click="gohome"
      />
      <img
        src="/img/logo-short.svg"
        alt="short version of logo"
        class="h-6 px-3 sm:hidden"
        @click="gohome"
      />

      <span class="flex-1"></span>

      <span :class="navbarmenuclass" @click="menuclicked"></span>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    homepage: {
      type: String,
      default: () => '/',
    },
  },
  computed: {
    navbarmenuclass() {
      const popoutshown = this.$store.state.content.isPoppedout

      return `${
        popoutshown ? 'ri-close-line' : 'ri-menu-line'
      } px-2 py-1 transition duration-200 delay-100 sm:hidden text-secondary navbarmenu`
    },
    hide() {
      return this.$store.state.topbar.hide
    },
  },
  watch: {
    hide(val) {
      const navbarHeight = this.$refs.navbar.offsetHeight

      this.$anime({
        targets: this.$refs.navbar,
        top: val ? -navbarHeight : 0,
        duration: 250,
        easing: 'cubicBezier(0.4, 0, 0.2, 1)',
      })
    },
  },

  methods: {
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

<style>
@keyframes color {
  0% {
    color: #f79226;
  }
  50% {
    color: #ee2d30;
  }
  100% {
    color: #f79226;
  }
}

.navbarmenu::before {
  animation: color 9s infinite linear;
}
</style>
