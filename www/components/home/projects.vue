<template>
  <div class="text-gray-600 p-4">
    <h1
      class="text-lg pb-4 text-center font-semibold flex whitespace-nowrap items-center gap-4"
    >
      past projects:
      <span class="w-full grow h-px bg-slate-600"></span>
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
        @click="projectclick"
      >
        <div class="relative">
          <img
            :src="work.img"
            alt="work project cover"
            class="rounded-sm border border-gray-300"
          />

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

<script setup>
import { ref } from 'vue';
import workslist from '@/scripts/workslist';

const works = ref(workslist);

const projectclick = ({ target }) => {
  while (!target.hasAttribute('href')) {
    if (!target.parentNode) return;

    target = target.parentNode;
  }

  window.open(target.getAttribute('href'), '_blank');
};
</script>
