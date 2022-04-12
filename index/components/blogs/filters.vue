<template>
  <div class="mx-4 mb-8 text-xs">
    <div
      class="flex items-center border bg-gray-50 border-gray-200 focus-within:border-gray-4 rounded-sm"
    >
      <input
        type="text"
        class="p-2 grow font-light outline-none"
        placeholder="search for blog ..."
      />

      <i
        class="ri-search-line p-2 px-2.5 rounded-sm text-gray-100 aspect-square text-xs searchbutton"
      ></i>
    </div>

    <div class="px-2 py-1 opacity-50">
      <span class="font-semibold">[tag]</span>

      search with tags
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style scoped>
@keyframes color {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.searchbutton {
  animation: color 9s infinite linear;
  background: linear-gradient(45deg, #f79226, #ee2d30, #f79226, #ee2d30);
  background-size: 500% 500%;
}
</style>
