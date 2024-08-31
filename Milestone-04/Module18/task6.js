/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 60;
const isStudent = false;

if (age < 10) {
  console.log("free");
} else if (isStudent) {
  console.log(`Students get a 50% discount : ${800 * (50 / 100)}`);
} else if (age >= 60) {
  console.log(`Senior citizens a 15% discount : ${800 * (15 / 100)}`);
} else {
  console.log("Regular ticket fare 800 tk");
}
