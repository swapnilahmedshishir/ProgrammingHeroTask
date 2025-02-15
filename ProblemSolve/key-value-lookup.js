const n = 3;
const obj = {
  name1: 10,
  name2: 20,
  name3: 30,
};
const keys = "name4";

objectLength = Object.keys(obj).length;
console.log(objectLength);

if (obj.hasOwnProperty(keys)) {
  console.log(obj[keys]);
} else {
  console.log("Key not found in the object");
}
