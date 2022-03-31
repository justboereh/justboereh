<template>
  <div>
    <label
      :class="`flex items-center text-xs pb-1 pt-4 gap-2 transition ${labelclass}`"
      for="title"
    >
      Title
      <span class="w-full h-px bg-gray-700"></span>
    </label>

    <input
      v-model="value"
      class="border border-gray-700/0 focus:border-gray-700 dark:bg-gray-800/50 w-full text-sm p-2 outline-none rounded-sm"
      @focus="inputfocused"
      @blur="inputblured"
    />
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
    return { labelfocused: false, value: '' }
  },
  computed: {
    labelclass() {
      return this.labelfocused ? this.focusclass : this.defclass
    },
  },
  watch: {
    value(val) {
      this.$emit('valuechange', ['title', val])
    },
  },
  methods: {
    inputfocused() {
      this.labelfocused = true
    },
    inputblured() {
      this.labelfocused = false
    },
  },
}
</script>
