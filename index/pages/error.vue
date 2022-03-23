<template>
  <div class="w-full h-full flex justify-center items-center flex-col">
    <h1 class="text-3xl">⚠️ ERROR</h1>

    <p class="text-center text-sm">
      not your fault, but this doesn't look right.
    </p>

    <span class="pt-8 flex gap-8 items-center text-sm">
      <span class="px-4 py-2" @click="gohome">take me home</span>

      <span
        class="bg-gradient-to-br from-primary to-secondary px-4 py-2 rounded"
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
    goback() {
      this.$router.go(-1)
    },
    gohome() {
      this.$router.replace('/')
    },
  },
}
</script>
