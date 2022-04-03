<template>
  <div class="h-v14 text-center">
    <div class="relative">
      <div ref="image" class="gttt h-72 bg-cover bg-no-repeat bg-top"></div>

      <span
        class="text-4xl whitespace-nowrap translate-y-1/2 -translate-x-1/2 absolute -bottom-1 pt-0.5 leading-none left-1/2"
      >
        <span class="text-gray-900 font-normal">GOOD THINGS</span>

        <br />

        TAKE TIME
      </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    scrollTop() {
      return this.$store.state.content.scrollTop
    },
  },
  watch: {
    scrollTop(val) {
      console.log(val)
      this.$anime({
        targets: this.$refs.image,
        backgroundPosition: `center -${val / 2}px`,
        duration: 125,
        easing: 'cubicBezier(0.4, 0, 0.2, 1)',
      })
    },
  },
}
</script>

<style>
.gttt {
  background-image: url('/img/IMG_5078_500px.webp');
}

@media (min-width: 768px) {
  .gttt {
    background-image: url('/img/IMG_5078.jpg');
  }
}
</style>
