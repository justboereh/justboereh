<template>
  <div class="text-center pb-10">
    <div ref="image" class="gttt h-52 bg-no-repeat bg-top relative">
      <span
        class="text-4xl whitespace-nowrap text-gray-100 -translate-x-1/2 absolute -bottom-1 pt-0.5 leading-none left-1/2"
      >
        GOOD BLOGS
      </span>
    </div>

    <span class="text-xs textprisec">read blogs by justboereh</span>
  </div>
</template>

<script>
const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

export default {
  computed: {
    scrollTop() {
      return this.$store.state.content.scrollTop
    },
  },
  watch: {
    scrollTop(val) {
      this.$anime({
        targets: this.$refs.image,
        backgroundPosition: `center ${clamp(val / 10 + 50, 0, 100)}%`,
        duration: 0,
        easing: 'linear',
      })
    },
  },
}
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
