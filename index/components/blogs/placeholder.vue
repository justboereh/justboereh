<template>
  <div>
    <div
      class="w-full aspect-video bg-gray-300 grid place-items-center rounded-t-sm"
    >
      <i class="ri-image-line ri-2xl"></i>
    </div>

    <div
      :class="`bg-gray-600 h-5 my-2`"
      :style="`width: calc(100% - ${rand(3, 0, true)}rem)`"
    ></div>

    <div class="flex items-center">
      <h1 class="bg-gray-400 w-8 h-3"></h1>

      <span class="grow"></span>

      <div class="flex gap-2">
        <span v-for="n of 3" :key="n" class="bg-gray-400 w-8 h-3"> </span>
      </div>
    </div>

    <div class="pt-1">
      <div
        v-for="n in rand(2, 3)"
        :key="n"
        :class="`bg-gray-400 h-2 my-1`"
        :style="`width: calc(100% - ${rand(3, 0, true)}rem)`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    rand(max, min, nofloor) {
      const r = Math.random() * max + min
      return nofloor ? r : Math.floor(r)
    },
  },
}
</script>
