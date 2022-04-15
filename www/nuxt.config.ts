import { defineNuxtConfig } from 'nuxt3';
import { resolve } from 'path';
import { createCommonJS } from 'mlly';
const { __dirname } = createCommonJS(import.meta.url);

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'justboereh — hello',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'My very own personal website',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#f3f4f6' },
        {
          name: 'keywords',
          content:
            'boe, bow, Boe, BOE, Bow, BOW, justboe, JUSTBOE, justboereh, JUSTBOEREH, Justboereh, JustBoeReh, Justbow, JUSTBOW, JustBow, justbowreh',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
        },
      ],
    },
  },
  css: ['~/assets/main.css', '~/assets/noto-sans.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  buildModules: ['@vueuse/nuxt', 'tailwindcss'],
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'errorpage',
        path: '/:pathMatch(.*)*',
        file: resolve(__dirname, 'pages/error.vue'),
      });
    },
  },
});
