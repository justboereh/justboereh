const WHExtend = ({ theme }) => {
  const extend = {}
  const temp = {
    0.5: 0.125,
    1: 0.25,
    1.5: 0.375,
    2: 0.5,
    2.5: 0.625,
    3: 0.75,
    3.5: 0.875,
    4: 1,
    5: 1.25,
    6: 1.5,
    7: 1.75,
    8: 2,
    9: 2.25,
    10: 2.5,
    11: 2.75,
    12: 3,
    14: 3.5,
  }

  for (let t in temp) {
    extend[`v${t}`] = `calc(100vh - ${temp[t]}rem)`
    extend[`p${t}`] = `calc(100% - ${temp[t]}rem)`
  }

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
