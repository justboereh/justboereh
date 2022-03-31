<template>
  <div>
    <div
      :class="`flex items-center text-xs pb-1 pt-4 gap-2 transition ${labelclass}`"
    >
      Tags
      <span class="w-full h-px bg-gray-700"></span>
    </div>

    <div
      class="flex bg-gray-800/50 border focus-within:border-gray-700 border-gray-700/0 text-sm rounded-sm p-2 gap-2"
      @click.self="clicked"
    >
      <span
        v-for="tag of tags"
        :key="tag[0]"
        class="bg-gray-800 px-2 flex justify-center rounded-sm tagsclass"
      >
        <p :style="`color: ${tag[1]}`">#{{ tag[0] }}</p>
        <i
          class="ri-close-line opacity-75 focus:opacity-100 pl-1"
          :name="tag[0]"
          @click="tagdeleteclick"
        ></i>
      </span>

      <input
        ref="input"
        class="grow outline-none bg-white/0"
        type="text"
        @input="inputed"
        @focus.prevent="focused"
        @blur="blured"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    defclass: {
      type: String,
      default: () => '',
    },
    focusclass: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      labelfocused: false,
      tags: [],
    }
  },
  computed: {
    labelclass() {
      return this.labelfocused ? this.focusclass : this.defclass
    },
  },
  watch: {
    tags(val) {
      this.$emit('tagschange', ['tags', val])
    },
  },
  methods: {
    randomcolor(below155) {
      return (
        'rgb(' +
        Math.floor(100 * Math.random() + (!below155 ? 155 : 0)) +
        ',' +
        Math.floor(100 * Math.random() + (!below155 ? 155 : 0)) +
        ',' +
        Math.floor(100 * Math.random() + (!below155 ? 155 : 0)) +
        ')'
      )
    },
    focused() {
      this.labelfocused = true
    },
    blured() {
      this.labelfocused = false
    },
    clicked() {
      if (this.tags.length > 2) return

      this.$refs.input.focus()
    },
    tagdeleteclick({ target }) {
      this.tags = this.tags.filter((x) => x[0] !== target.getAttribute('name'))
    },
    inputed({ data }) {
      if (data !== ' ') return
      const trimVal = this.$refs.input.value.trim()

      if (this.tags.some((x) => x[0] === trimVal)) {
        this.$refs.input.value = trimVal

        return
      }
      this.tags.push([trimVal, this.randomcolor()])

      this.$refs.input.value = ''

      if (this.tags.length > 2) {
        this.$refs.input.blur()
      }
    },
    inputfocused() {
      if (this.tags.length > 2) {
        this.$refs.input.blur()

        return
      }

      this.$refs.input.focus()
    },
  },
}
</script>

<style scoped>
.tagsclass:hover i {
  opacity: 100%;
}
</style>
