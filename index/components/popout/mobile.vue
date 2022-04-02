<template>
  <div :class="popoutclass">
    <div class="flex flex-col h-full overflow-y-auto">
      <div class="grow"></div>

      <div class="w-full border-0 flex flex-col items-center">
        <span
          v-for="link of links"
          :key="link.text"
          :href="link.href"
          :target="link.target || ''"
          class="flex items-center relative"
          @click="linkclicked"
        >
          <i :class="`ri-${link.icon}-line text-sm absolute -left-1/4`"></i>
          <span class="py-4">{{ link.text }}</span>
        </span>
      </div>

      <div class="grow"></div>

      <div class="mx-1 py-2 flex justify-evenly">
        <span
          class="ri-github-fill"
          href="http://github.com/justboereh"
          target="_blank"
          @click="linkclicked"
        ></span>
        <span
          class="ri-youtube-fill"
          href="http://youtube.com/justboereh"
          target="_blank"
          @click="linkclicked"
        ></span>
        <span
          class="ri-soundcloud-fill"
          href="http://soundcloud.com/justboereh"
          target="_blank"
          @click="linkclicked"
        ></span>
        <span
          class="ri-twitter-fill"
          href="http://twitter.com/justboereh"
          target="_blank"
          @click="linkclicked"
        ></span>
        <span
          href="http://tiktok.com/@justboereh"
          target="_blank"
          @click="linkclicked"
        >
          tiktok
        </span>
      </div>

      <div class="grow"></div>
      <div class="grow"></div>

      <div
        class="mx-6 p-0.5 bg-gradient-to-br from-primary to-secondary border border-gray-100/5 rounded-sm text-center"
        href="/#contact"
        @click="linkclicked"
      >
        <div class="w-full h-full bg-gray-900 rounded-sm py-4">contact me</div>
      </div>
    </div>
  </div>
</template>

<script>
const anime = require('animejs');

const popout =
  'text-2xl font-light overflow-y-auto absolute w-screen h-screen bg-gray-900 text-gray-100 top-0 transition duration-150 px-2 pb-4 pt-14'

export default {
  data() {
    return {
      target: null,
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
    }
  },
  computed: {
    popoutclass() {
      const x = this.$store.state.content.isPoppedout

      return `${popout} ${!x ? 'opacity-0 pointer-events-none' : ''}`
    },
    poppedout() {
      return this.$store.state.content.isPoppedout
    },
  },
  watch: {
    poppedout(val) {
      if (val && this.target && this.target.querySelector('i')) {
        anime({
          targets: this.target.querySelector('i'),
          left: '-25%',
          duration: 0,
        })

        anime({
          targets: this.target.querySelector('span'),
          opacity: 1,
          duration: 0,
        })
      }
    },
  },
  methods: {
    linkclicked({ target }) {
      while (!target.hasAttribute('href')) {
        if (!target.parentNode) return

        target = target.parentNode
      }

      if (this.$route.path === target.getAttribute('href')) {
        if (target.querySelector('i')) {
          anime({
            targets: target.querySelector('i'),
            left: '25%',
            duration: 150,
            direction: 'alternate',
            easing: 'cubicBezier(.5, .05, .1, .3)',
          })
          anime({
            targets: target.querySelector('span'),
            opacity: 0.75,
            duration: 150,
            direction: 'alternate',
            easing: 'cubicBezier(.5, .05, .1, .3)',
          })
        }

        return
      }

      this.target = target

      const doRoute = () => {
        this.$store.commit('content/isPoppedout', false)

        const isNewTab = target.getAttribute('target') === '_blank'

        isNewTab
          ? window.open(target.getAttribute('href'), '_blank')
          : this.$router.push(target.getAttribute('href'))
      }

      if (target.querySelector('i')) {
        anime({
          targets: target.querySelector('i'),
          left: '125%',
          duration: 350,
          easing: 'cubicBezier(.5, .05, .1, .3)',
        })
        anime({
          targets: target.querySelector('span'),
          opacity: 0,
          duration: 350,
          easing: 'cubicBezier(.5, .05, .1, .3)',
        })

        setTimeout(() => {
          doRoute()
        }, 400)

        return
      }

      doRoute()
    },
  },
}
</script>
