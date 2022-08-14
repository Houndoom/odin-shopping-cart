function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images/shop', false, /\.(png|jpe?g|svg)$/));

const items = [
  {
    name: "Poké Ball",
    price: 200,
    img: images['pokeball.png']
  },
  {
    name: "Great Ball",
    price: 600,
    img: images['greatball.png']
  },
  {
    name: "Ultra Ball",
    price: 1200,
    img: images['ultraball.png']
  },
  {
    name: "Potion",
    price: 300,
    img: images['potion.png']
  },
  {
    name: "Super Potion",
    price: 700,
    img: images['superpotion.png']
  },
  {
    name: "Hyper Potion",
    price: 1200,
    img: images['hyperpotion.png']
  },
  {
    name: "Max Potion",
    price: 2500,
    img: images['maxpotion.png']
  },
  {
    name: "Full Restore",
    price: 3000,
    img: images['fullrestore.png']
  },
  {
    name: "Revive",
    price: 1500,
    img: images['revive.png']
  },
  {
    name: "Antidote",
    price: 100,
    img: images['antidote.png']
  },
  {
    name: "Paralyze Heal",
    price: 200,
    img: images['paralyzeheal.png']
  },
  {
    name: "Awakening",
    price: 250,
    img: images['awakening.png']
  },
  {
    name: "Burn Heal",
    price: 250,
    img: images['burnheal.png']
  },
  {
    name: "Ice Heal",
    price: 250,
    img: images['iceheal.png']
  },
  {
    name: "Full Heal",
    price: 600,
    img: images['fullheal.png']
  },
  {
    name: "Escape Rope",
    price: 550,
    img: images['escaperope.png']
  },
  {
    name: "Repel",
    price: 350,
    img: images['repel.png']
  },
  {
    name: "Super Repel",
    price: 500,
    img: images['superrepel.png']
  },
  {
    name: "Max Repel",
    price: 700,
    img: images['maxrepel.png']
  }
];

export default items;

