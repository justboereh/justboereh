<template>
  <nav :class="topbarclass">
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
export const navbarmenu = 'px-2 py-1 transition duration-200 delay-100'
export const navbarmain =
  'z-20 bg-gray-900 text-gray-100 w-screen h-14 sm:h-20 fixed border-b transition duration-200 border-gray-800 transform'

export default {
  data() {
    return {
      homehref: '/',
    }
  },
  computed: {
    topbarclass() {
      const toHide = this.$store.state.topbar.hide

      return `${navbarmain} ${
        toHide && !this.popoutshown ? '-translate-y-full' : ''
      }`
    },
    navbarmenuclass() {
      return `${navbarmenu} ${
        this.popoutshown ? 'ri-close-line' : 'ri-menu-line'
      }`
    },
    popoutshown() {
      return this.$store.state.topbar.showPopout
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
      this.$router.replace(this.homehref)
    },
  },
}
</script>
