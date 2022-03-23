export default () => {
  if (!localStorage) return

  if (
    !localStorage.getItem('thememode') &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.body.classList.add('dark')

    return
  }
  
  if (localStorage.getItem('thememode') === 'dark') {
    document.body.classList.add('dark')
  }
}
