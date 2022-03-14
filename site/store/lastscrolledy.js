export const state = () => ({ value: 0 })

export const mutations = {
  set(state, num) {
    state.value = num
  },
}
