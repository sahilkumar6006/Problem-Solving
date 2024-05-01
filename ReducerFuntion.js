
// let arr = [5,1,3,2,6];

// function findSum(arr) {
//   let sum = 0;
//   for(let i =0; i < arr.length; i++) {
//     sum = sum + arr[i]
//   }

//   return sum;
// }


// const data = findSum(arr);
// console.log("in the data", data)

// let arr= [5,4,7,6,8,2];
// let output = arr.reduce(function(sum, curr) 
// {
//   sum = sum + curr;
//   return sum;
// });

// console.log(output)

// let arr = [10, 20, 39, 40, 50];
// let val = arr.reduce(function(pv,cv, ci){
//   console.log(pv + " " + cv + " " + ci)

//   return pv + cv
// })



// let arr = [10, 20, 30,40, 50];
// // let val = arr.reduce((product, curr))


// let val = arr.reduce(function(product, cur) {
//   return product *cur
// })
// console.log("in the arr",val)




let arr2d = [
  [10,20,30],
  [22,17],
  [54,58,92,34],
  [61,31,55,92],
  [17]
]

let kk = arr2d.reduce(function(pv,cv, i)  {
let joinded = pv.concat(cv);
return joinded
console.log(joinded)
})

console.log(kk)