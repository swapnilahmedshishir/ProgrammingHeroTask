function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return "Invalid Input";
  }

  let checkValidatin = /\d/.test(name);
  if (checkValidatin) {
    return true;
  } else {
    return false;
  }
}

console.log(checkDigitsInName('Suman'));
