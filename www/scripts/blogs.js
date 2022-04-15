const baseurl =
  (process.env.NODE_ENV === 'development'
    ? '//localhost:80/'
    : '//api.justboereh.com/') + 'blogs/'

const nameOfLS = 'blogs:downloaded'

export const getBlogs = function (errorcallback, id) {
  if (!localStorage || !this) return null

  const request = async () => {
    try {
      for (const x of (await this.$axios.get(baseurl + (id ? '?id=' + id : '')))
        .data) {
        x.tags = x.tags.split(',')

        const ntags = []

        for (const tag of x.tags) {
          if (tag.trim() === '') continue

          ntags.push(tag.trim())
        }

        x.tags = ntags

        x.lastfectched = Date.now()

        this.$store.commit('content/blogsAdd', x)
      }

      if (this.$store.state.content.blogs.length > 0) {
        localStorage.setItem(
          'blogs:downloaded',
          JSON.stringify({
            lastfectched: Date.now(),
            data: this.$store.state.content.blogs,
          })
        )
      }
    } catch (_) {
      errorcallback(_)
    }
  }

  if (!localStorage.getItem(nameOfLS)) {
    request()

    return
  }

  try {
    const blogsobj = JSON.parse(localStorage.getItem(nameOfLS))

    if (blogsobj.lastfectched + 86400000 <= Date.now()) {
      localStorage.removeItem(nameOfLS)

      request()

      return
    }

    blogsobj.data.forEach((x) => {
      if (x.lastfectched + 86400000 <= Date.now()) {
        id = x.id

        request()

        return
      }

      this.$store.commit('content/blogsAdd', x)
    })

    if (!blogsobj.data.some((x) => x.id === id)) request()
  } catch (_) {
    errorcallback(_)
  }
}
