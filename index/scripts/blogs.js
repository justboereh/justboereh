const baseurl =
  (process.env.NODE_ENV === 'development'
    ? '//localhost:80/'
    : '//api.justboereh.com/') + 'blogs/'

const nameOfLS = 'blogs:downloaded'

const randomcolor = (above155) => {
  return (
    'rgb(' +
    Math.floor(100 * Math.random() + (above155 ? 155 : 0)) +
    ',' +
    Math.floor(100 * Math.random() + (above155 ? 155 : 0)) +
    ',' +
    Math.floor(100 * Math.random() + (above155 ? 155 : 0)) +
    ')'
  )
}

export const getBlogs = function (errorcallback, id) {
  if (!localStorage || !this) return null

  const request = async () => {
    try {
      for (const x of (await this.$axios.get(baseurl + (id ? '?id=' + id : '')))
        .data) {
        x.tags = x.tags.split(',')

        const ntags = []

        for (const tag of x.tags) {
          ntags.push([tag.trim(), randomcolor()])
        }

        x.tags = ntags

        x.lastfectched = Date.now()

        this.$store.commit('content/blogsAdd', x)
      }
    } catch (_) {
      errorcallback()
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

    blogsobj.data.forEach((x) => this.$store.commit('content/blogsAdd', x))
  } catch (_) {
    errorcallback()
  }
}
