export default function () {
  console.log(this)

  this.nuxt.hook('ready', async (nuxt) => {
    console.log('lol')
  })
}
