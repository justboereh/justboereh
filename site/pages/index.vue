<template>
  <div>
    <div class="w-screen relative home-home bg-fixed overflow-hidden">
      <img
        ref="home-image"
        class="absolute h-full top-0 left-0"
        :style="imagescale"
        src="/IMG_5078.webp"
        alt=""
      />

      <div
        class="absolute w-full h-full flex flex-col items-center justify-center"
      >
        <p>I am</p>

        <p class="text-5xl font-bold leading-none">BOE REH</p>

        <div class="font-light">
          <p>full stack web developer</p>
        </div>
      </div>

      <div class="absolute bottom-0 w-full flex justify-center py-8">
        <span
          class="bg-gradient-to-br from-primary to-secondary cursor-pointer px-4 py-2 rounded shadow-md"
        >
          see my works
        </span>
      </div>
    </div>

    <div class="bg-red-500 h-20 w-screen relative">
      <Nuxt-Link :class="``" to="/works">See my works</Nuxt-Link>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    wow
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    wow
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    wow
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    wow
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    wow
  </div>
</template>

<script>
import ismobile from '../scripts/ismobile'

export default {
  computed: {
    imagescale() {
      const lsy = this.$store.state.content.scrollTop
      const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

      return `transform: scale(${clamp(
        lsy / 333 + 1,
        1,
        1.5
      )}); filter: blur(${clamp(
        lsy / 25,
        0,
        16
      )}px) grayscale(100%); opacity: ${clamp(1 - lsy / 444, 0, 1)}`
    },
  },
  mounted() {
    if (ismobile()) {
      // this.$refs['home-image'].src = '/IMG_5078.webp'
    }
  },
}
</script>

<style>
.home-home {
  height: calc(100vh - 3.5rem);
}
</style>
