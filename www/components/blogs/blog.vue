<template>
  <NuxtLink :to="blogSlug(blog)">
    <img
      :src="blog.thumbnail"
      alt="work project cover"
      class="-z-10 aspect-video rounded-sm"
    />

    <div class="flex md:text-base p-2 pt-4">
      <h1
        v-if="abstrnumsame(blog.timeposted, blog.timeupdated)"
        class="opacity-50"
      >
        {{ timestr(blog.timeposted) }}
      </h1>

      <h1
        v-if="!abstrnumsame(blog.timeposted, blog.timeupdated)"
        class="opacity-50"
      >
        Updated {{ timestr(blog.timeupdated) }}
      </h1>

      <span class="grow"></span>

      <div class="flex gap-2">
        <span v-for="tag of blog.tags" :key="tag" class="textprisec">
          #{{ tag }}
        </span>
      </div>
    </div>

    <h1 class="text-lg md:text-3xl font-semibold px-2">
      {{ blog.title }}
    </h1>

    <p class="pt-1 px-2 md:text-lg text-gray-500 leading-relaxed tracking-wide">
      {{ blog.shortbody }}
    </p>
  </NuxtLink>
</template>

<script>
import dayjs from 'dayjs';

export default {
  props: {
    blog: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    blogSlug({ id, title }) {
      title = title.toLowerCase().split(' ').join('-');

      return `/blogs/${id}-${title}`;
    },
    timestr(str) {
      return dayjs(Number(str)).format('MMM D YYYY');
    },
    abstrnumsame(a, b) {
      return Number(a) === Number(b);
    },
  },
};
</script>
