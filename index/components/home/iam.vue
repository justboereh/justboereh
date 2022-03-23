<template>
  <span class="relative">
    I am
    <span :class="cursorclass">{{ cursorvalue }}</span>
  </span>
</template>

<script>
export default {
  data() {
    return {
      flipped: false,
      cursorvalue: '│',
      cursorclass: 'absolute -right-3',
      cursorintnum: 0,
    }
  },
  mounted() {
    this.cursorintnum = setInterval(() => {
      const ran = Math.floor(Math.random() * 150)

      setTimeout(
        () => {
          this.cursorvalue = this.cursorvalue === '│' ? ' ' : '│'
        },
        ran < 100 ? 0 : ran
      )
    }, 500)
  },
  beforeDestroy() {
    clearInterval(this.cursorintnum)
  },
}
</script>
