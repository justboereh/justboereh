<template>
  <div>
    <div class="w-screen relative home-home bg-fixed overflow-hidden">
      <img
        ref="home-image"
        class="absolute h-full top-0 left-0"
        :style="imagescale"
        src="/IMG_5078.jpg"
        alt=""
      />

      <div
        class="absolute w-full h-full flex flex-col items-center justify-center"
      >
        <div class="typer-element">
          <span></span>

          <span>|</span>
        </div>
        <p class="text-5xl font-bold leading-none">BOE REH</p>
      </div>
    </div>
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
import Typewriter from 'typewriter-effect/dist/core'

import ismobile from '../scripts/ismobile'

export default {
  computed: {
    imagescale() {
      const lsy = this.$store.state.lastscrolledy.value
      const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

      return `transform: scale(${clamp(
        lsy / 333 + 1,
        1,
        1.5
      )}); filter: blur(${clamp(
        lsy / 25,
        0,
        16
      )}px) grayscale(100%); opacity: ${clamp(1 - lsy / 222, 0, 1)}`
    },
  },
  mounted() {
    new Typewriter('.typer-element', {
      strings: ['I am', 'I an', 'I m', 'Eye m', ' Eye am'],
      autoStart: true,
      loop: true,
    })

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
