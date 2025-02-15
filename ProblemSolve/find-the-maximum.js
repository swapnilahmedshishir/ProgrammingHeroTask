const n = 0;
const arr = "1 3 5 2 70 81 4 10 11 12";

const numbers = arr.split(" ").reduce((a, b) => Math.max(a, b), -n);
console.log(numbers);
