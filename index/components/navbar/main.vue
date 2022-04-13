<template>
  <div
    id="nav"
    ref="navbar"
    class="'w-full top-0 h-14 md:h-20 fixed border-b bg-gray-100 border-gray-300"
  >
    <div class="flex w-full h-full items-center px-1">
      <img
        src="/img/logo-long.svg"
        alt="long version of logo"
        class="h-8 px-3 hidden sm:block"
        tabindex="0"
        @click="gohome"
      />
      <img
        src="/img/logo-short.svg"
        alt="short version of logo"
        class="h-6 px-3 sm:hidden"
        tabindex="0"
        @click="gohome"
      />

      <span class="flex-1"></span>

      <span :class="navbarmenuclass" tabindex="0" @click="menuclicked"></span>
    </div>
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
  mounted() {
    const resizenavbar = () => {
      this.$refs.navbar.style.width =
        document.documentElement.clientWidth + 'px'
    }
    window.addEventListener('resize', resizenavbar)

    resizenavbar()
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

      this.$router.push(this.homepage)
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
