import { browser } from '$app/env';

export default () => {
  if (!browser) return;
  if (!localStorage) return;

  if (!localStorage.getItem('thememode')) {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.body.classList.add('dark');
    }

    return;
  }

  if (localStorage.getItem('thememode') === 'dark') {
    document.body.classList.add('dark');
  }
};
