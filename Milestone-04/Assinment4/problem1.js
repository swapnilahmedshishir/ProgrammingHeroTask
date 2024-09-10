/*function signature/sample */
function calculateTax(income, expenses) {
  if (
   income < 0  ||
    expenses < 0 ||
    income < expenses ||
    typeof income !== "number" ||
    typeof expenses !== "number"
  ) {
    return "Invalid Input";
  }else {
  let totalPorfit = income - expenses;
  let tax = totalPorfit * 0.2;
  return tax;
  }
}