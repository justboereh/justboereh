<template>
  <div homepage="/blogs">
    <article>
      <p v-html="blog.body"></p>
    </article>
  </div>
</template>

<script>
import { getBlogs } from '@/scripts/blogs';

export default {
  data() {
    return {};
  },
  head: { title: 'blogs — justboereh' },
  computed: {
    blog() {
      return useContent.blogs.find((x) => x.id === this.blogslug(true));
    },
  },
  beforeMount() {
    getBlogs(() => {
      this.$router.push('/blogs');
    }, this.blogslug(true));
  },
  methods: {
    blogslug(forid) {
      if (!this.$route.params) return;

      const blogslug = this.$route.params.blogslug;

      if (!forid) return blogslug;

      const id = blogslug.split('-')[0];

      if (isNaN(Number(id))) return null;

      return id;
    },
  },
};
</script>

<script setup>
definePageMeta({
  layout: 'blogs',
});
</script>
