import { reactive } from 'vue';

export default reactive({
  hide: 0,
  mobilenav: false,
  links: [
    {
      href: '/',
      icon: 'home-4',
      text: 'head home',
    },
    {
      href: '//github.com/justboereh',
      icon: 'folders',
      text: 'my works',
      target: '_blank',
    },
    {
      href: '/#about',
      icon: 'user-6',
      text: 'about me',
    },
    {
      href: '/blogs',
      icon: 'article',
      text: 'my blogs',
    },
    {
      href: '/tools',
      icon: 'tools',
      text: 'just tools',
    },
  ],
  socials: [
    ['github', 'http://github.com/justboereh'],
    ['youtube', '//youtube.com/justboereh'],
    ['soundcloud', 'http://soundcloud.com/justboereh'],
    ['twitter', 'http://twitter.com/justboereh'],
    ['snapchat', 'https://www.snapchat.com/add/justboereh'],
    ['instagram', 'http://instgram.com/justboereh'],
  ],

  hideSet(bool) {
    this.hide = bool;
  },
  mobilenavSet(bool) {
    this.showPopout = bool;
  },
});
