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
    },
  },
  plugins: [],
}
