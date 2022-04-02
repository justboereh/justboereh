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
        ['Javascript', randomcolor(true)],
        ['NodeJS', randomcolor(true)],
      ],
      text: 'armato',
      img: 'https://i.imgur.com/YkP3Vi9.jpg',
      description:
        "You know Rojo? Yeah, you could say ARMATO is similar to that. Don't compare ARMATO to Rojo though. Only I can do that*.",
    },
    {
      to: 'https://github.com/justboereh/rnm',
      tags: [['Lua', randomcolor(true)]],
      text: 'rnm',
      img: 'https://i.imgur.com/cedyHO9.jpg',
      description: 'Number Module is a module for working with numbers in Lua.',
    },
    {
      to: 'https://github.com/justboereh/justboereh',
      tags: [
        ['VueJS', randomcolor(true)],
        ['Javascript', randomcolor(true)],
        ['PHP', randomcolor(true)],
      ],
      text: 'justboereh.com',
      img: 'https://i.imgur.com/cedyHO9.jpg',
      description: 'My very own personal website.',
    },
  ],
]
