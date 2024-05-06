let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll("[data-number]");
const opeartorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equals-button");
const pointButton = document.getElementById("point-button");
const deleteButton = document.getElementById("del-button");
const clearButton = document.getElementById("clear-button");
const currentOperationScreen = document.getElementById(
  "currentOpeartionScreen"
);
const lastOperationScreen = document.getElementById("lastOperationScreen");

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
  if (currentOpeartionScreen.textContent === "0" || shouldResetScreen)
    resetScreen();
  currentOperationScreen.textContent += number;
}

function resetScreen() {
  currentOperationScreen.textContent = "";
  shouldResetScreen = false;
}

function clear() {
  currentOperationScreen.textContent = "0";
  lastOperationScreen.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function appendPoint() {}

function deleteNumber() {}

function setOperation() {}

function evaluate() {}

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
