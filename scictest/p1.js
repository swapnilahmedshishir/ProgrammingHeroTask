console.log("start");
setTimeout(() => {
  console.log("timeOut");
}, 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
