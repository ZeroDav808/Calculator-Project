const buttons = document.querySelectorAll("button");
const textBox = document.querySelector("input");

let number1 = null;
let number2 = null;
let operation = null;
let result = null;
let displayOutput = 0;

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
      return div(num1, num2).toFixed(2);
    default:
      return "Invalid operation";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => handleInput(event));
});

function handleDigits(value) {
  // Need to handle the case where result is not null
  if (!operation && !number1 && !number2 && !result) {
    number1 = value;
    displayOutput = number1;
  } else if (number1 && !operation && !number2 && !result) {
    number1 += value;
    displayOutput = number1;
  } else if (number1 && operation && !number2 && !result) {
    number2 = value;
    displayOutput = number2;
  } else if (number1 && operation && number2 && !result) {
    number2 += value;
    displayOutput = number2;
  } else if(result){
    number1 = result;
    number2 = value;
    result = null;
    displayOutput = number2;
  }
  textBox.value = displayOutput;
}

function handleClear() {
  number1 = null;
  number2 = null;
  operation = null;
  result = null;
  displayOutput = 0;
  textBox.value = displayOutput;
}

function handleInput(event) {
  const valueType = event.target.className;
  const value = event.target.textContent;

  switch (valueType) {
    case "digits":
      console.log("Button is a digit");
      handleDigits(value);
      break;
    case "operator":
      console.log("Button is a operator");
      operation = value;
      break;
    case "equal":
      console.log("Button is a equal");
      result = operate(operation, number1, number2);
      displayOutput = result;
      textBox.value = displayOutput;
      break;
    case "clear":
      console.log("Button is a clear");
      handleClear();
      break;
    default:
      console.log("Idk");
      break;
  }
}
