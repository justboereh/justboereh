<template>
  <Layout homepage="/blogs">
    <Nuxt />
  </Layout>
</template>

<script>
export default {
  mounted() {
    if (this.$store.state.content.blogs.length > 0) {
      localStorage.setItem(
        'blogs:downloaded',
        JSON.stringify({
          lastfectched: Date.now(),
          data: this.$store.state.content.blogs,
        })
      )
    }
  },
}
</script>
