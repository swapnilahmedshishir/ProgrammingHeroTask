/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const userWeight = 120;
const useHeight = 7;

// const BMI = (userWeight / ((useHeight * useHeight)/10000)).toFixed(2);
const BMI = userWeight / (useHeight)^2;

if (BMI < 18.5) {
    console.log(`you are underweight.BMI  :  ${BMI}`);
    
}else if (BMI >= 18.5 && BMI <=24.9){
console.log(`you are normal. BMI  : ${BMI}`);

}else if (BMI >=25 && BMI <= 29.9){
console.log(` you are overweight. BMI  :  ${BMI}`);
}
 else {
    console.log(`you are obese BMI  :  ${BMI}`);    
}

console.log(3^2);
