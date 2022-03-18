<template>
  <div class="w-full h-full flex justify-center items-center flex-col">
    <h1 class="text-3xl">⚠️ ERROR</h1>

    <p class="text-center text-sm">
      oh no! it's not your fault, but something went wrong.
    </p>

    <span class="pt-8 flex gap-8 items-center text-sm">
      <span class="px-4 py-2" @click="gohome">take me home</span>

      <span
        class="bg-gradient-to-br from-primary to-secondary px-4 py-2 rounded-md"
        @click="goback"
      >
        let's go back
      </span>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    gpback() {
      this.$router.go(-1)
    },
  },
  gohome() {
    this.$router.replace('/')
  },
}
</script>
