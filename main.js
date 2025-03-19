const buttons = document.querySelectorAll("button");
const textBox = document.querySelector("input");

let operand1 = null;
let operand2 = null;
let operator1 = null;
let operator2 = null;
let textBoxVal = 0;
let result = 0;

function add(val1, val2) {
  return Number(val1) + Number(val2);
}

function sub(val1, val2) {
  return Number(val1) - Number(val2);
}

function mult(val1, val2) {
  return Number(val1) * Number(val2);
}

function div(val1, val2) {
  if (val2 === 0) {
    return "Error! Cannot divide by zero";
  }
  return Number(val1) / Number(val2);
}

function operate(operation, num1, num2) {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return sub(num1, num2);
    case "*":
      return mult(num1, num2);
    case "/":
      return div(num1, num2);
    default:
      return "Invalid operation";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => handleInput(event));
});

function handleDigits() {}

function handleOperators() {}

function handleEqual() {}

function handleClear() {
  operand1 = null;
  operand2 = null;
  operator1 = null;
  operator2 = null;
  textBoxVal = 0;
  result = 0;
}

function handleInput(event) {
  const valueType = event.target.className;

  switch (valueType) {
    case "digits":
      console.log("Button is a digit");
      break;
    case "operator":
      console.log("Button is a operator");
      break;
    case "equal":
      console.log("Button is a equal");
      break;
    case "clear":
      console.log("Button is a clear");
      break;
    default:
      console.log("Idk");
      break;
  }
}
