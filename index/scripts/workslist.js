function randomcolor(above155) {
  return (
    'rgb(' +
    Math.floor(100 * Math.random() + (above155 ? 155 : 0)) +
    ',' +
    Math.floor(100 * Math.random() + (above155 ? 155 : 0)) +
    ',' +
    Math.floor(100 * Math.random() + (above155 ? 155 : 0)) +
    ')'
  )
}

export default [
  [
    {
      to: 'https://github.com/justboereh/armato',
      tags: [
        ['Javascript', randomcolor()],
        ['NodeJS', randomcolor()],
      ],
      text: 'armato',
      img: 'https://i.imgur.com/G5EBWrj.jpg',
      description:
        "You know Rojo? Yeah, you could say ARMATO is similar to that. Don't compare ARMATO to Rojo though. Only I can do that*.",
    },
    {
      to: 'https://github.com/justboereh/rnm',
      tags: [['Lua', randomcolor()]],
      text: 'rnm',
      img: 'https://i.imgur.com/860OWOv.jpg',
      description: 'Number Module is a module for working with numbers in Lua.',
    },
    {
      to: 'https://github.com/justboereh/justboereh',
      tags: [
        ['VueJS', randomcolor()],
        ['Javascript', randomcolor()],
        ['PHP', randomcolor()],
      ],
      text: 'justboereh.com',
      img: 'https://i.imgur.com/860OWOv.jpg',
      description: 'My very own personal website.',
    },
  ],
]
