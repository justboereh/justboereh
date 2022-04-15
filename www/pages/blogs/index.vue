<template>
  <Layout homepage="/blogs">
    <div v-show="!didError && !loading">
      <BlogsGood />

      <BlogsFilters />

      <div
        class="grid gap-8 md:grid-cols-2 xl:grid-cols-3 place-content-evenly mx-4 m-4 xl:mx-1/4"
      >
        <BlogsBlog
          v-for="blog of blogs"
          :key="blog.id"
          class="text-xs hover:bounce"
          :blog="blog"
        />
      </div>

      <End>this is the end, thank you 💙</End>
    </div>

    <div
      v-show="didError && !loading"
      class="w-full h-v20 flex justify-center items-center flex-col"
    >
      <h1 class="text-3xl">⚠️ OH NOSE</h1>

      <p class="text-center text-sm">something went wrong, come back again</p>

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

    <div v-show="loading">
      <BlogsGood />

      <BlogsFilters placeholder />

      <div
        class="grid gap-8 md:grid-cols-2 xl:grid-cols-3 md:place-content-evenly xl:mx-1/4"
      >
        <BlogsPlaceholder
          v-for="n in 11"
          :key="n"
          class="mx-4 text-xs animate-pulse"
          :style="`animation-delay: ${n * 250}ms`"
        >
        </BlogsPlaceholder>
      </div>
    </div>
  </Layout>
</template>

<script>
import { getBlogs } from '@/scripts/blogs';

export default {
  data() {
    return { didError: false };
  },
  head: { title: 'blogs — justboereh' },
  computed: {
    blogs: () => useContent.blogs,
    loading() {
      return this.didError === !0 || this.blogs.length < 1;
    },
  },
  mounted() {
    getBlogs.call(this, () => (this.didError = true));
  },
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
