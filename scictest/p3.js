function Users(name) {
  this.name = name;
}
// right way
// Users.prototype.sayHello = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };
// incorrect method don't apply arrow functions
Users.prototype.sayHello = () => {
  console.log(`Hello, my name is ${this.name}`);
};

const user1 = new Users("swapnil");
const user2 = new Users("ahmed");

console.log(user1.sayHello());
console.log(user2.sayHello());
