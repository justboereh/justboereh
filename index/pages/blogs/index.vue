<template>
  <div>
    <div v-if="!didError" class="grid gap-8">
      <BlogsGood />

      <div v-for="blog of blogs" :key="blog.id" class="mx-4 text-xs">
        <NuxtLink :to="blogSlug(blog)">
          <img :src="blog.thumbnail" alt="work project cover" class="-z-10" />

          <h1 class="text-2xl font-medium">{{ blog.title }}</h1>

          <div class="flex">
            <h1 class="opacity-50">
              {{ timestr(blog.timeposted) }}
            </h1>

            <span
              v-if="!abstrnumsame(blog.timeposted, blog.timeupdated)"
              class="opacity-50 px-1"
            >
              •
            </span>

            <h1
              v-if="!abstrnumsame(blog.timeposted, blog.timeupdated)"
              class="opacity-50"
            >
              Updated {{ timestr(blog.timeupdated) }}
            </h1>

            <span class="grow"></span>

            <div class="flex gap-2">
              <span
                v-for="tag of blog.tags"
                :key="tag[0]"
                :style="`color: ${tag[1]}`"
              >
                #{{ tag[0] }}
              </span>
            </div>
          </div>

          <p class="pt-1">{{ blog.shortbody }}</p>
        </NuxtLink>
      </div>

      <End>this is the end, thank you 💙</End>
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
          class="bg-gradient-to-br from-primary to-secondary px-4 py-2"
          @click="goback"
        >
          let's go back
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

import { getBlogs } from '@/scripts/blogs'

export default {
  layout: 'blogs',
  data() {
    return { didError: false }
  },
  head: { title: 'blogs — justboereh' },
  computed: {
    blogs() {
      return this.$store.state.content.blogs
    },
  },
  mounted() {
    getBlogs.call(this, () => {
      this.didError = true
    })
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
    timestr(str) {
      return dayjs(Number(str)).format('MMM D')
    },
    abstrnumsame(a, b) {
      return Number(a) === Number(b)
    },
  },
}
</script>
