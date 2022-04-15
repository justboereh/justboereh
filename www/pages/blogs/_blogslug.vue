<template>
  <Layout homepage="/blogs">
    <article>
      <h1>{{ blog }}</h1>

      <p v-html="body"></p></article
  ></Layout>
</template>

<script>
import { getBlogs } from '@/scripts/blogs';

export default {
  layout: 'blogs',
  data() {
    return { body: '' };
  },
  head: { title: 'blogs — justboereh' },
  computed: {
    blog() {
      return useContent.blogs.find((x) => x.id === this.blogslug(true));
    },
  },
  watch: {
    blog() {
      this.body = this.blog.body;
    },
  },
  beforeMount() {
    getBlogs.call(
      this,
      () => {
        this.$router.push('/blogs');
      },
      this.blogslug(true)
    );
  },
  methods: {
    blogslug(forid) {
      const blogslug = this.$route.params.blogslug;

      if (!forid) return blogslug;

      const id = blogslug.split('-')[0];

      if (isNaN(Number(id))) return null;

      return id;
    },
  },
};
</script>
