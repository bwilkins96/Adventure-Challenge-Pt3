module.exports = {
  rooms: [
    {
      id: 1,
      name: "Crossroad",
      description: "You are standing at a crossroad. To the north, east, south and west you see empty space",
      exits: {n: 2, e: 3, w: 4, s: 5}
    },
    {
      id: 2,
      name: "Northern point",
      description: "You are standing at the north point of a crossroad, looking back at the life you have left behind. To the south, you see an empty intersection.",
      exits: {s: 1}
    },
    {
      id: 3,
      name: "Eastern point",
      description: "You are standing at the east point of a crossroad, at the edge of a cliff. To the west, you see an empty intersection.",
      exits: {w: 1}
    },
    {
      id: 4,
      name: "Western point",
      description: "You are standing at the west point of a crossroad. To the east, you see an empty intersection. Further west, you notice a castle-like structure that you didn't see before",
      exits: {e: 1, w: 6}
    },
    {
      id: 5,
      name: "Southern point",
      description: "You are standing at the south point of a crossroad. To the south, you see thick forests. Just before the treeline, you notice an old sign with the inscription 'to hit, or to pet?' To the north, you see an empty intersection.",
      exits: {n: 1}
    },
    {
      id: 6,
      name: "Mysterious castle",
      description: "The castle seems to be becoming larger and more menacing as you approach. You feel a strange feeling overwhelming your senses, as if you are losing all concept of time. Do you dare enter the castle door?",
      exits: {e: 4, w: 7}
    },
    {
      id: 7,
      name: "Bailey's court",
      description: "You find yourelf in a supersized royal court face-to-face with a gigantic boston terrier. You gather that his name is Bailey from the banners bearing that name. He looks at you and howls a deafening sound. What do you do?",
      exits: {e: 6}
    }
  ],
  items: [
    {
      name: "rock",
      description: "Just a simple rock",
      room: 1
    },
    {
      name: "magical sandwich",
      description: "A tasty looking sandwich",
      room: 2,
      isFood: true
    }
  ],
  enemies: [
    {
      name: "goblin",
      description: "A mean-looking goblin",
      room: 3
    },
    {
      name: "Bailey",
      description: "A cute and giant boston terrier",
      room: 7,
      isBailey: true
    },
  ]
}
