let createCounter = (n) => {
  return function () {
    return n++;
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

// console.log(counter());
// console.log(counter());
// console.log(counter());

// function createCounter(n) {
//     return function() {
//       return n++;
//     };
//   }

// Example usage:
//   const counter = createCounter(5);

//   console.log(counter()); // 5
//   console.log(counter()); // 6
//   console.log(counter()); // 7
