<template>
  <div>
    <div
      :class="`flex items-center text-xs pb-1 pt-4 gap-2 transition text-gray-900 ${labelclass}`"
    >
      Tags
      <span class="w-full h-px bg-gray-500"></span>
    </div>

    <div
      class="flex border-transparent border focus-within:border-gray-400 bg-gray-300 text-sm rounded-sm p-2 gap-2"
      @click.self="clicked"
    >
      <span
        v-for="tag of tags"
        :key="tag"
        class="bg-gray-200 px-2 flex justify-center rounded-sm tagsclass"
      >
        <p class="textprisec">#{{ tag }}</p>
        <i
          class="ri-close-line opacity-75 focus:opacity-100 pl-1"
          :name="tag"
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
    focused() {
      if (this.tags.length > 2) {
        this.$refs.input.blur()
        this.$refs.input.value = ''

        return
      }

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
      this.tags = this.tags.filter((x) => x !== target.getAttribute('name'))
    },
    inputed({ data }) {
      if (data !== ' ') return
      const trimVal = this.$refs.input.value.trim()

      if (this.tags.includes(trimVal)) {
        this.$refs.input.value = trimVal

        return
      }
      this.tags.push(trimVal)

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
