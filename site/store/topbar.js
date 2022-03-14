export const state = () => ({
  hide: false,
  showPopout: false,
})

export const mutations = {
  toggleHide(state) {
    state.hide = !state.hide
  },
  setHide(state, bool) {
    state.hide = bool
  },
  togglePopout(state) {
    state.showPopout = !state.showPopout
  },
  setPopout(state, bool) {
    state.showPopout = bool
  },
}
