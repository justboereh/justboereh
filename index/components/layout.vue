<template>
  <div ref="main" class="top-0 font-light">
    <main id="main-content" ref="main" class="main-main">
      <div ref="paddingdiv" class="h-14 md:h-20 w-full"></div>

      <slot keep-alive />
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
      this.doheightadjustment(val)
    },
  },
  mounted() {
    if (location.hash && document.querySelector(location.hash)) {
      document.querySelector(location.hash).scrollIntoView({
        behavior: 'smooth',
      })
    }

    const resizenavbar = () => {
      document.querySelector('#nav').style.width =
        document.documentElement.clientWidth + 'px'
    }
    window.addEventListener('resize', resizenavbar)

    resizenavbar()

    document.addEventListener('scroll', this.scrollEvent)

    this.doheightadjustment(false)
  },
  methods: {
    scrollEvent() {
      const target = document.documentElement

      this.$store.commit('content/scrollTop', target.scrollTop)

      const ybelowlast = target.scrollTop - this.lastscrolledy >= 0
      const ybelownavheight =
        target.scrollTop > document.querySelector('#nav').offsetHeight

      this.$store.commit('topbar/setHide', ybelowlast && ybelownavheight)

      this.lastscrolledy = target.scrollTop
    },
    doheightadjustment(val) {
      const navbarHeight = document.querySelector('#nav').offsetHeight

      this.$anime({
        targets: this.$refs.main,
        height: `calc(100vh - ${val ? 0 : navbarHeight}px)`,
        duration: 250,
        easing: 'cubicBezier(0.4, 0, 0.2, 1)',
      })
    },
  },
}
</script>

<style>
@keyframes color {
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ee2d30;
  }
  100% {
    background-color: #f79226;
  }
}

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
  animation: color 5s infinite linear;
  background-color: #f79226;
  border-radius: 0.25rem;
}

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

.textprisec {
  animation: color 9s infinite linear;
  color: #f79226;
}
</style>
