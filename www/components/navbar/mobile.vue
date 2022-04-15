<template>
  <div
    ref="popout"
    class="text-2xl font-light overflow-y-auto absolute w-full bg-gray-100 opacity-0 text-gray-600 top-0 px-2 pb-4 pt-14 pointer-events-none"
  >
    <div class="flex flex-col h-full">
      <div class="grow"></div>

      <div class="w-full border-0 flex flex-col items-center">
        <span
          v-for="link of links"
          :key="link.text"
          :href="link.href"
          :target="link.target || ''"
          class="flex items-center relative"
          @click="linkclicked"
        >
          <i :class="`ri-${link.icon}-line text-sm absolute -left-1/4`"></i>
          <span class="py-4">{{ link.text }}</span>
        </span>
      </div>

      <div class="grow"></div>
      <div class="grow"></div>

      <div class="mx-1 py-2 flex justify-evenly">
        <span
          v-for="social in socials"
          :key="social[1]"
          :class="`ri-${social[0]}-fill`"
          :href="social[1]"
          target="_blank"
          @click="linkclicked"
        ></span>

        <span
          href="http://tiktok.com/@justboereh"
          target="_blank"
          @click="linkclicked"
        >
          tiktok
        </span>
      </div>

      <div class="grow"></div>

      <div
        class="mx-6 p-0.5 bg-gradient-to-br from-primary to-secondary border border-gray-100/5 rounded-sm text-center"
        href="/#contact"
        @click="linkclicked"
      >
        <div class="w-full h-full bg-gray-100 rounded-sm py-4">contact me</div>
      </div>

      <div class="grow"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      target: null,
    };
  },
  computed: {
    poppedout: () => useNavbar.mobilenav,
    scrollTop: () => useContent.scrolltop,
    links: () => useNavbar.links,
    socials: () => useNavbar.socials,
  },
  watch: {
    poppedout(val) {
      document.body.style.overflow = val ? 'hidden' : '';
      document.documentElement.style.overflow = val ? 'hidden' : '';

      if (val && this.target && this.target.querySelector('i')) {
        useAnime({
          targets: this.target.querySelector('i'),
          left: '-25%',
          duration: 0,
        });

        useAnime({
          targets: this.target.querySelector('span'),
          opacity: 1,
          duration: 0,
        });
      }

      this.$refs.popout.style.pointerEvents = val ? 'auto' : 'none';
      useAnime({
        targets: this.$refs.popout,
        opacity: val ? 1 : 0,
        duration: 150,
        easing: 'cubicBezier(.5, .05, .1, .3)',
      });
    },
    scrollTop(val) {
      useAnime({
        targets: this.$refs.popout,
        top: val,
        duration: 0,
      });
    },
  },
  mounted() {
    const resizenavbar = () => {
      this.$refs.popout.style.height =
        document.documentElement.clientHeight + 'px';
    };

    window.addEventListener('resize', resizenavbar);

    resizenavbar();
  },
  methods: {
    linkclicked({ target }) {
      while (!target.hasAttribute('href')) {
        if (!target.parentNode) return;

        target = target.parentNode;
      }

      if (this.$route.path === target.getAttribute('href')) {
        if (target.querySelector('i')) {
          useAnime({
            targets: target.querySelector('i'),
            left: '25%',
            duration: 150,
            direction: 'alternate',
            easing: 'cubicBezier(.5, .05, .1, .3)',
          });
          useAnime({
            targets: target.querySelector('span'),
            opacity: 0.75,
            duration: 150,
            direction: 'alternate',
            easing: 'cubicBezier(.5, .05, .1, .3)',
          });
        }

        return;
      }

      this.target = target;

      const doRoute = () => {
        useNavbar.mobilenav = false;

        const isNewTab = target.getAttribute('target') === '_blank';

        isNewTab
          ? window.open(target.getAttribute('href'), '_blank')
          : this.$router.push(target.getAttribute('href'));
      };

      if (target.querySelector('i')) {
        useAnime({
          targets: target.querySelector('i'),
          left: '125%',
          duration: 350,
          easing: 'cubicBezier(.5, .05, .1, .3)',
        });
        useAnime({
          targets: target.querySelector('span'),
          opacity: 0,
          duration: 350,
          easing: 'cubicBezier(.5, .05, .1, .3)',
        });

        setTimeout(() => {
          doRoute();
        }, 400);

        return;
      }

      doRoute();
    },
  },
};
</script>
