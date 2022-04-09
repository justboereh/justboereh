<template>
  <div>
    <NuxtLink :to="blogSlug(blog)">
      <img
        :src="blog.thumbnail"
        alt="work project cover"
        class="-z-10 rounded-t-sm"
      />

      <h1 class="text-lg font-medium">{{ blog.title }}</h1>

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
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    blog: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    blogSlug({ id, title }) {
      title = title.toLowerCase().split(' ').join('-')

      return `/blogs/${id}-${title}`
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
