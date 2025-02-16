const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr;
};
let init = 0;

const result = nums.reduce(fn, init);
console.log(result);
