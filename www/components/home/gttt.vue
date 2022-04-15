<template>
  <div class="h-v14 text-center">
    <div class="relative">
      <div ref="image" class="gttt h-72 bg-no-repeat bg-top"></div>

      <span
        class="text-4xl whitespace-nowrap translate-y-1/2 -translate-x-1/2 absolute text-gray-100 -bottom-1 pt-0.5 leading-none left-1/2"
      >
        GOOD THINGS
        <br />
        <span class="textprisec">TAKE TIME</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    scrollTop: () => useContent.scrolltop,
  },
  watch: {
    scrollTop(val) {
      useAnime({
        targets: this.$refs.image,
        backgroundPosition: `center ${useClamp(val / 10 + 50, 0, 100)}%`,
        duration: 0,
        easing: 'linear',
      });
    },
  },
};
</script>

<style>
.gttt {
  background-position: center 50%;
  background-image: url('https://i.imgur.com/RXBEBGY.jpg');
}

@media (min-width: 768px) {
  .gttt {
    background-image: url('https://i.imgur.com/RXBEBGY.jpg');
  }
}
</style>
