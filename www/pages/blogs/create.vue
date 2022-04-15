<template>
  <div class="p-4">
    <BlogsCreateGbct />

    <br />

    <div>
      <BlogsCreateFormTitle
        :defclass="defclass"
        :focusclass="focusclass"
        @valuechange="valuechange"
      />

      <BlogsCreateFormBody
        :defclass="defclass"
        :focusclass="focusclass"
        @valuechange="valuechange"
      />

      <BlogsCreateFormTags
        :defclass="defclass"
        :focusclass="focusclass"
        @valuechange="valuechange"
      />

      <div class="flex justify-end pt-4">
        <button
          class="text-sm tracking-wide bg-gradient-to-br from-primary to-secondary px-4 py-2 rounded-sm"
          type="submit"
        >
          POST BLOG
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defclass: 'opacity-50',
      focusclass: 'opacity-100',
      bodyvalue: '',
      titlevalue: '',
      tagsvalue: [],
    }
  },
  head: { title: 'post a blogs — justboereh' },
  methods: {
    randomcolor(above155) {
      return (
        'rgb(' +
        Math.floor(100 * Math.random() + (above155 ? 155 : 0)) +
        ',' +
        Math.floor(100 * Math.random() + (above155 ? 155 : 0)) +
        ',' +
        Math.floor(100 * Math.random() + (above155 ? 155 : 0)) +
        ')'
      )
    },
    valuechange([type, value]) {
      if (!this[type + 'value']) return

      this[type + 'value'] = value
    },
  },
}
</script>
