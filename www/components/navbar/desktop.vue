<template>
  <div class="flex gap-4">
    <span
      v-for="link of links"
      :key="link.text"
      :href="link.href"
      :target="link.target || ''"
      class="flex items-center relative cursor-pointer text-lg textprisec"
      @click="linkclicked"
    >
      <span class="py-4">{{ link.text }}</span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: useNavbar.links,
    };
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
