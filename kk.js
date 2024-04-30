let arr = [2,5,9,8,15,11,6]

let sq = arr.map(function(v,i, arr) {
  return v* v;
})

console.log("in the sq", sq)


let arr2 = [
  "Summet Mallik",
  "Amit Malik",
  "Inderjit Malik",
  "Daya Malik",
  "Kunal Malik"
]

let output = arr2.map((v,i) => {
  let namePart = v.split(" ");
  let fname = namePart[0]
  let lname = namePart[1]
  let fnfc = fname[0];
  let lnlc = lname[0];

return fnfc + "." + lnlc
})
console.log(output)