let products = [
  {
    name: 'TShirt',
    price: 25
  },
  {
    name: "headphones",
    price: 125
  },
  {
    name: "Keyboard",
    price:75
  },
  {
    name: "Monitor",
    price:200
  }
]

const data = products.filter((v,i) => v.price > 100).map((v,i) => v.name.toUpperCase())
console.log("in the data", data);

