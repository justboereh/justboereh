export const state = () => ({
  scrollTop: 0,
  isPoppedout: false,
  blogs: [],
  blogssort: '',
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
  blogsAdd(state, value) {
    if (typeof value !== 'object') return
    if (state.blogs.some((x) => x.id === value.id)) return

    state.blogs.push(value)
  },
  blogsSet(state, value) {
    state.blogs = value
  },
}
