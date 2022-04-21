<template>
  <div ref="main" class="top-0 font-light">
    <div ref="paddingdiv" class="h-14 w-full"></div>

    <slot id="main-content" />

    <NavbarMobile />
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
    };
  },
  computed: {
    hidenavbar() {
      return useContent.hide;
    },
  },
  watch: {
    hidenavbar(val) {
      this.doheightadjustment(val);
    },
  },
  mounted() {
    if (location.hash && document.querySelector(location.hash)) {
      document.querySelector(location.hash).scrollIntoView({
        behavior: 'smooth',
      });
    }

    const resizenavbar = () => {
      document.querySelector('#nav').style.width =
        document.documentElement.clientWidth + 'px';
    };
    window.addEventListener('resize', resizenavbar);

    resizenavbar();

    document.addEventListener('scroll', this.scrollEvent);
  },
  methods: {
    scrollEvent() {
      const target = document.documentElement;

      useContent.scrolltop = target.scrollTop;

      const ybelowlast = target.scrollTop - this.lastscrolledy >= 0;
      const ybelownavheight =
        target.scrollTop > document.querySelector('#nav').offsetHeight;

      useNavbar.hide = ybelowlast && ybelownavheight;

      this.lastscrolledy = target.scrollTop;
    },
    doheightadjustment(val) {
      // const navbarHeight = document.querySelector('#nav').offsetHeight
      // this.$anime({
      //   targets: this.$refs.main,
      //   height: `calc(100vh - ${val ? 0 : navbarHeight}px)`,
      //   duration: 250,
      //   easing: 'cubicBezier(0.4, 0, 0.2, 1)',
      // })
    },
  },
};
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

@keyframes bgposition {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media (min-width: 640px) {
  body {
    scrollbar-width: thin;
    scrollbar-color: #f79226;
  }

  body::-webkit-scrollbar {
    width: 0.69rem;
  }
}

body::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}

.textprisec {
  animation: color 9s infinite linear;
  color: #f79226;
}

.bgprisec,
body::-webkit-scrollbar-thumb {
  animation: bgposition 18s infinite linear;
  background: linear-gradient(-45deg, #f79226, #ee2d30, #f79226, #ee2d30);
  background-size: 500% 500%;
}
</style>
