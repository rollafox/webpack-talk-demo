function getHeroes() {
  return [{
      name: "Superman"
    },
    {
      name: "Batman"
    },
    {
      name: "Ironman"
    }
  ];
}

var listOfNonHeroes = [{
    name: "Dion"
  },
  {
    name: "Rojer"
  },
  {
    name: "John"
  }
];

module.exports = getHeroes();
// module.exports = listOfNonHeroes[1]; // See tree shaking