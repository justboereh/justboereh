<template>
  <div class="bg-gray-200 text-gray-600 p-4">
    <h1 class="text-2xl pb-8 text-center font-semibold">
      these are my past projects:
    </h1>

    <div
      v-for="worklist of works"
      :key="worklist + 'worklist'"
      class="flex flex-col md:flex-row gap-4"
    >
      <div
        v-for="work of worklist"
        :key="work.text"
        :href="work.to"
        tabindex="5"
        @click="projectclick"
      >
        <div class="relative">
          <img :src="work.img" alt="work project cover" class="-z-10 rounded" />

          <p
            class="absolute px-4 bg-gray-200/75 z-0 rounded py-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm"
          >
            {{ work.text }}
          </p>
        </div>

        <div class="flex items-center text-xs gap-2 pt-2 textprisec">
          <span v-for="tag of work.tags" :key="tag"> #{{ tag }} </span>
        </div>
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
