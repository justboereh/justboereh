<template>
  <div :class="popoutclass">
    <div class="flex flex-col h-full overflow-y-auto">
      <table class="w-full border-0">
        <tbody>
          <tr
            v-for="link of links"
            :key="link.text"
            :href="link.href"
            :target="link.target || ''"
            @click="linkclicked"
          >
            <td class="py-4 text-center">{{ link.emoji }}</td>
            <td class="py-4">{{ link.text }}</td>
          </tr>
        </tbody>
      </table>

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
        class="mx-1 py-2 bg-gradient-to-br from-primary to-secondary border border-gray-100/5 rounded-md text-center"
        href="/#contact"
        @click="linkclicked"
      >
        📝 contact
      </div>
    </div>
  </div>
</template>

<script>
const popout =
  'text-2xl font-light overflow-y-auto absolute w-screen h-screen bg-gray-900 text-gray-100 top-0 z-10 transition duration-150 px-2 pb-4 pt-14'

export default {
  data() {
    return {
      links: [
        {
          href: '/',
          emoji: '🏠',
          text: 'head home',
        },
        {
          href: '//github.com/justboereh',
          emoji: '💻',
          text: 'my works',
          target: '_blank',
        },
        {
          href: '/#about',
          emoji: '👦',
          text: 'about me',
        },
        {
          href: '/blogs',
          emoji: '📰',
          text: 'my blogs',
        },
        {
          href: '/tools',
          emoji: '🛠',
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
  },
  methods: {
    linkclicked({ target }) {
      if (target.tagName === 'TD') target = target.parentNode
      if (!target.hasAttribute('href')) return

      this.$store.commit('content/isPoppedout', false)

      const isNewTab = target.getAttribute('target') === '_blank'

      isNewTab
        ? window.open(target.getAttribute('href'), '_blank')
        : this.$router.push(target.getAttribute('href'))
    },
  },
}
</script>
