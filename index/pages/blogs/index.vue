<template>
  <div>
    <div class="flex flex-col">
      <NuxtLink v-for="blog of blogs" :key="blog.id" :to="blogSlug(blog)">
        <p>by {{ blog.authors }}</p>

        <h1>{{ blog.title }}</h1>

        <p>{{ blog.shortbody }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blogs',
  data() {
    return { blogs: [] }
  },
  head: { title: 'blogs — justboereh' },
  async mounted() {
    const baseurl =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:80'
        : 'https://api.justboereh.com'

    try {
      console.log(await this.$axios.get(baseurl + '/blogs'))

      this.blogs = (
        await this.$axios.get(baseurl + '/blogs', {
          mode: 'cors',
          credentials: 'include',
        })
      ).data
    } catch (_) {
      console.log(_)
    }
  },
  methods: {
    blogSlug({ id, title }) {
      title = title.toLowerCase().split(' ').join('-')

      return `/blogs/${id}-${title}`
    },
  },
}
</script>
