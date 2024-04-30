const array = [10,20,57,40,50,70];

const data = array.map((v,i) => {
  console.log("in the value", v, "in the index", i)
  return v* v
})

console.log("in the data", data)



const filter = array.filter((v,i) => v % 2 === 0)
console.log("in the filter", filter)



