<template>
  <div class="h-v14 text-center">
    <div class="relative">
      <div ref="image" class="gttt h-72 bg-cover bg-no-repeat bg-top"></div>

      <span
        class="text-4xl whitespace-nowrap translate-y-1/2 -translate-x-1/2 absolute -bottom-1 pt-0.5 leading-none left-1/2"
      >
        GOOD THINGS
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
      this.$anime({
        targets: this.$refs.image,
        backgroundPosition: `center -${val / 5}px`,
        duration: 0,
        easing: 'linear',
      })
    },
  },
}
</script>

<style>
.gttt {
  background-position: center 0px;
  background-image: url('https://i.imgur.com/1h6hrZI.jpg');
}

@media (min-width: 768px) {
  .gttt {
    background-image: url('https://i.imgur.com/1h6hrZI.jpg');
  }
}
</style>
