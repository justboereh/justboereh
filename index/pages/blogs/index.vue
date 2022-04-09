<template>
  <div>
    <div v-if="!didError && !loading" class="grid gap-8">
      <BlogsGood />

      <div v-for="blog of blogs" :key="blog.id" class="mx-4 text-xs">
        <BlogsBlog :blog="blog" />
      </div>

      <End>this is the end, thank you 💙</End>
    </div>

    <div
      v-if="didError && !loading"
      class="w-full h-v20 flex justify-center items-center flex-col"
    >
      <h1 class="text-3xl">⚠️ OH NOSE</h1>

      <p class="text-center text-sm">
        something went wrong, please wait a moment
      </p>

      <span class="pt-8 flex gap-8 items-center text-sm">
        <span class="px-4 py-2" @click="gohome">take me home</span>

        <span
          class="bg-gradient-to-br from-primary to-secondary px-4 py-2 text-gray-100 rounded-sm"
          @click="goback"
        >
          let's go back
        </span>
      </span>
    </div>

    <div v-if="loading" class="grid gap-8">
      <BlogsGood />

      <BlogsPlaceholder
        v-for="n in 11"
        :key="n"
        class="mx-4 text-xs animate-pulse"
      >
      </BlogsPlaceholder>
    </div>
  </div>
</template>

<script>
import { getBlogs } from '@/scripts/blogs'

export default {
  layout: 'blogs',
  data() {
    return { didError: false, loading: true }
  },
  head: { title: 'blogs — justboereh' },
  computed: {
    blogs() {
      return this.$store.state.content.blogs
    },
  },
  watch: {
    didError(val) {
      this.loading = val === false
    },
    blogs(val) {
      this.loading = val.length > 0
    },
  },
  mounted() {
    getBlogs.call(this, () => {
      this.didError = true
    })
  },
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
