<template>
  <article>
    <p>by {{ blog.authors }}</p>

    <h1>{{ blog.title }}</h1>

    <p v-html="getbody">}</p>
  </article>
</template>

<script>
export default {
  layout: 'blogs',
  data() {
    return {
      blog: {
        title: '',
        authors: '',
        body: '',
      },
    }
  },
  async fetch() {
    const blogslug = this.$route.params.blogslug

    if (!blogslug.split('-').length > 0) this.$router.push('/blogs')

    const id = blogslug.split('-')[0]

    if (typeof Number(id) !== 'number') this.$router.push('/blogs')

    const baseurl =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:80'
        : 'https://api.justboereh.com'

    try {
      this.blog = (
        await this.$axios.get(baseurl + '/blogs?id=' + id, {
          headers: { 'Access-Control-Allow-Origin': '*' },
        })
      ).data[0]
    } catch (_) {
      console.log('error')
    }
  },
  head: { title: 'blogs — justboereh' },
  computed: {
    getbody() {
      return this.blog.body
    },
  },
}
</script>
