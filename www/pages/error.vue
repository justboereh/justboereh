<template>
  <Layout>
    <div class="w-full h-v14 flex justify-center items-center flex-col">
      <h1 class="text-3xl">⚠️ ERROR</h1>

      <p class="text-center text-sm">
        not your fault, but this doesn't look right.
      </p>

      <span class="pt-8 flex gap-8 items-center text-sm">
        <span class="px-4 py-2" @click="gohome">take me home</span>

        <span
          class="bgprisec px-4 py-2 rounded-sm text-gray-100"
          @click="goback"
        >
          let's go back
        </span>
      </span>
    </div>
  </Layout>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.go(-1);
    },
    gohome() {
      this.$router.replace('/');
    },
  },
};
</script>
