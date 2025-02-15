const s = "madam";

const checkPaindom = s.split("").reverse().join("");

if (checkPaindom === s) {
  console.log("Yes");
} else {
  console.log("No");
}
