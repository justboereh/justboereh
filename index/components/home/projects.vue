<template>
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
          <img :src="work.img" alt="work project cover" class="-z-10 rounded" />

          <p class="absolute px-4 bg-gray-800/50 z-0 rounded py-1 top-1 left-1">
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

        <hr class="border-gray-700/75 mt-2" />
      </div>
    </div>
  </div>
</template>

<script>
import works from '@/scripts/workslist'

export default {
  data() {
    return {
      works,
    }
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
