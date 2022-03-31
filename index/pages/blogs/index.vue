<template>
  <div>
    <div v-if="!didError" class="flex flex-col">
      <NuxtLink v-for="blog of blogs" :key="blog.id" :to="blogSlug(blog)">
        <p>by {{ blog.authors }}</p>

        <h1>{{ blog.title }}</h1>

        <p>{{ blog.shortbody }}</p>
      </NuxtLink>

      <p class="text-center text-xs p-6">this is the end, thank you ❤️</p>
    </div>

    <div
      v-if="didError"
      class="w-full h-v20 flex justify-center items-center flex-col"
    >
      <h1 class="text-3xl">⚠️ OH NOSE</h1>

      <p class="text-center text-sm">
        something went wrong, please wait a moment
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
  </div>
</template>

<script>
export default {
  layout: 'blogs',
  data() {
    return { blogs: [], didError: false }
  },
  head: { title: 'blogs — justboereh' },
  async mounted() {
    const baseurl =
      process.env.NODE_ENV === 'development'
        ? '//localhost:80/'
        : '//api.justboereh.com/'

    try {
      this.blogs = (await this.$axios.get(baseurl + 'blogs/')).data
    } catch (_) {
      this.didError = true
    }
  },
  methods: {
    blogSlug({ id, title }) {
      title = title.toLowerCase().split(' ').join('-')

      return `/blogs/${id}-${title}`
    },
    goback() {
      this.$router.go(-1)
    },
    gohome() {
      this.$router.replace('/')
    },
  },
}
</script>
