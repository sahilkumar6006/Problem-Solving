Array.prototype.myFilter = function (callback) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    let val = this[i];

    let rbv = callback(v, i, arr);

    if (rbv === true) {
      res.push(v);
    }
  }

  return res;
};

let arr = [20, 42, 69, 91, 11, 21];

arr.myFilter((v, i) => {
  if (v % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
