<template>
  <div class="text-center pb-10">
    <div ref="image" class="gttt h-52 bg-cover bg-no-repeat bg-top relative">
      <span
        class="text-4xl whitespace-nowrap -translate-x-1/2 absolute -bottom-1 pt-0.5 leading-none left-1/2"
      >
        GOOD BLOGS
      </span>
    </div>

    <p class="text-xs opacity-50">read blogs by justboereh</p>
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
        backgroundPosition: `center -${val / 2}px`,
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
