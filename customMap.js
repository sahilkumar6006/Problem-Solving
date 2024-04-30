Array.prototype.myMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    let val = this[i];
    let rv = callback(val, i, this);
    res.push(rv);
  }

  return res;
};

let arr = [2, 4, 6, 8, 10];
const data = arr.myMap((v, i, arr) => {
  return v * v;
});

console.log("in the data", data);
