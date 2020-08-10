// addition
function add(number1, number2) {
  return number1 + number2;
}
// subtraction
function subtract(number1, number2) {
  return number1 - number2;
}
//multiplication
function multiply(number1, number2) {
  return number1 * number2;
}
//division
function divide(number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
// addition
const resultAdd = add(number1, number2);
alert(resultAdd);

// subtraction
const resultSub = subtract(number1, number2);
alert(resultSub);

//multiplication
const resultMult = multiply(number1, number2);
alert(resultMult);

//division
const resultDiv = divide(number1, number2);
alert(resultDiv);