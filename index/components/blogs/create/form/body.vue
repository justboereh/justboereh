<template>
  <div>
    <label
      :class="`flex items-center text-xs pb-1 pt-4 gap-2 transition ${labelclass}`"
      for="title"
    >
      Body
      <span class="w-full h-px bg-gray-700"></span>
    </label>

    <textarea
      id="body-textarea"
      ref="bodyarea"
      v-model="value"
      class="border border-gray-700/0 focus:border-gray-700 dark:bg-gray-800/50 w-full text-sm p-2 outline-none rounded-sm min-h-max"
      name="body"
      cols="30"
      rows="10"
      @focus="inputfocused"
      @blur="inputblured"
    ></textarea>
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
    return { labelfocused: false, value: '', observers: [] }
  },
  computed: {
    labelclass() {
      return this.labelfocused ? this.focusclass : this.defclass
    },
  },
  watch: {
    value(val) {
      this.$emit('valuechange', ['body', val])
    },
  },
  mounted() {
    const observer = new MutationObserver((_) => {
      const textareaheight = getComputedStyle(this.$refs.bodyarea).height.slice(
        0,
        -2
      )
      this.$refs.bodyarea.style.height =
        (textareaheight < 160 ? 160 : textareaheight) + 'px'
    })

    this.observers.push(observer)

    observer.observe(this.$refs.bodyarea, {
      attributes: true,
      attributeFilter: ['style'],
    })
  },
  beforeDestroy() {
    for (const observer of this.observers) {
      observer.disconnect()
    }
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
