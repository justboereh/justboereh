let lastscrolledy = 0

export default function ({ target }) {
  lastscrolledy = target.scrollTop

  if (target.scrollTop - lastscrolledy <= 0 || !target.scrollTop >= 80) {
    this.$store.commit('topbar/setHide', false)
  } else {
    this.$store.commit('topbar/setHide', true)
  }
}
