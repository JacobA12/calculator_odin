let firstOperand = "";
let secondOperand = "";
let currentOperation = null;

const numberButtons = document.querySelectorAll("[data-number]");
const opeartorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equals-button");
const pointButton = document.getElementById("point-button");
const deleteButton = document.getElementById("del-button");
const clearButton = document.getElementById("clear-button");
const currentOperationScreen = document.getElementById(
  "currentOpeartionScreen"
);

clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
pointButton.addEventListener("click", appendPoint);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

opeartorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

function appendNumber(number) {
  currentOperationScreen.textContent += number;
}

function appendPoint() {
  if (currentOpeartionScreen.textContent.toString.contains('.')) {
    return;
  }
  currentOperationScreen.textContent += '.';
}

function clear(){
  currentOperationScreen.textContent = '0';
}

function deleteNumber(){
  if (currentOperationScreen.textContent !== '0') {
    currentOperationScreen.textContent = currentOperationScreen.textContent.toString().slice(0, -1);
  }
  return;
}

function roundResult(number) {}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {}
