export const state = () => ({
  scrollTop: 0,
  isPoppedout: false,
})

export const mutations = {
  scrollTop(state, value) {
    if (typeof value !== 'number') return

    state.scrollTop = value
  },
  isPoppedout(state, value) {
    if (typeof value !== 'boolean') return

    state.isPoppedout = value
  },
}
