<template>
  <div>
    <label
      :class="`flex items-center text-xs pb-1 pt-4 gap-2 transition ${labelclass}`"
      for="title"
    >
      {{ text }}
      <span class="w-full h-px bg-gray-700"></span>
    </label>

    <slot
      class="border border-gray-700/0 focus:border-gray-700 dark:bg-gray-800/50 w-full text-sm p-2 outline-none rounded-sm"
      @focus="slotfocused"
      @blur="slotblured"
    ></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => '',
    },
    defclass: {
      type: String,
      default: () => 'dark:text-gray-100/50 text-gray-900/50',
    },
    focusclass: {
      type: String,
      default: () => 'dark:text-gray-100 text-gray-900',
    },
  },
  data() {
    return { labelfocused: false }
  },
  computed: {
    labelclass() {
      return this.labelfocused ? this.defclass : this.focusclass
    },
  },
  methods: {
    slotfocused() {
      console.log(true)
      this.labelfocused = true
    },
    slotblured() {
      console.log(false)
      this.labelfocused = false
    },
  },
}
</script>
