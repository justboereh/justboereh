<template>
  <div>
    <div class="h-v14 text-center">
      <div class="relative">
        <div class="gttt h-72 bg-fixed bg-cover bg-center"></div>

        <span
          class="text-4xl whitespace-nowrap translate-y-1/2 -translate-x-1/2 absolute -bottom-1 pt-0.5 leading-none left-1/2"
        >
          <span class="text-gray-900 font-normal">GOOD THINGS</span>

          <br />

          TAKE TIME
        </span>
      </div>
    </div>

    <div class="bg-gray-800 p-4">
      <h1 class="text-2xl pb-8 text-center font-semibold">
        these are my past projects:
      </h1>

      <div
        v-for="worklist of works"
        :key="worklist + 'worklist'"
        class="flex flex-col md:flex-row gap-8"
      >
        <div
          v-for="work of worklist"
          :key="work.text"
          :href="work.to"
          @click="projectclick"
        >
          <div class="relative">
            <img
              :src="work.img"
              alt="work project cover"
              class="-z-10 rounded"
            />

            <p class="absolute px-4 bg-gray-900 z-0 rounded py-1 top-1 left-1">
              {{ work.text }}
            </p>
          </div>

          <div class="flex text-xs gap-2 pt-2">
            <span
              v-for="tag of work.tags"
              :key="tag[0]"
              :style="`color: ${tag[1]}`"
            >
              #{{ tag[0] }}
            </span>
          </div>

          <p class="text-xs font-normal pt-1">{{ work.description }}</p>
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p class="text-center">:) thank you for coming here</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import works from '../scripts/workslist'

export default {
  data() {
    return {
      works,
    }
  },
  head: {
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'My very own personal website',
      },
    ],
  },
  methods: {
    projectclick({ target }) {
      while (!target.hasAttribute('href')) {
        if (!target.parentNode) return

        target = target.parentNode
      }

      window.open(target.getAttribute('href'), '_blank')
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
