const WHExtend = ({ theme }) => {
  const extend = {}

  for (let index = 16; index < 76; index += 4) {
    extend[`v${index}`] = `calc(100vh - ${(index - 16) / 4 + 3}rem)`
    extend[`p${index}`] = `calc(100% - ${(index - 16) / 4 + 3}rem)`
  }

  for (const den of [2, 3, 4, 5, 6]) {
    for (let num = 1; num < 6; num++) {
      if (num === den || num / den >= 1) break

      extend[`v${num}/${den}`] = `calc(100vh - ${num / den}%)`
      extend[`p${num}/${den}`] = `calc(100% - ${num / den}%)`
    }
  }

  return {
    ...extend,
    ...theme('spacing'),
  }
}

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#f79226',
        secondary: '#ee2d30',
      },
      backdropBlur: {
        xxs: '2px',
        xs: '2px',
      },
      height: WHExtend,
      width: WHExtend,
    },
  },
  plugins: [],
}
