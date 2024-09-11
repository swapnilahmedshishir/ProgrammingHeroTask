function checkDigitsInName(name) {
  if (typeof name !== "String") {
    return "Invalid Input";
  }
  let checkValidatin = /\d/.test(name);
  if (checkValidatin) {
    return true;
  } else {
    return false;
  }
}
