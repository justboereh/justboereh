module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
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
};
