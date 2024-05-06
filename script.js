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
equalsButton.addEventListener("click", operate);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

opeartorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

function appendNumber(number) {
  currentOperationScreen.textContent += number;
}

function setOperation(newOperation) {
  if (currentOperation === null) {
    firstOperand = currentOperationScreen.textContent;
    currentOperation = newOperation;
    currentOperationScreen.textContent += newOperation;
  }
}

function appendPoint() {
  if (currentOperationScreen.textContent.toString().includes(".")) {
    return;
  }
  currentOperationScreen.textContent += ".";
}

function clear() {
  currentOperationScreen.textContent = "";
  currentOperation = null;
  firstOperand = "";
  secondOperand = "";
}

function deleteNumber() {
  if (currentOperationScreen.textContent !== "0") {
    currentOperationScreen.textContent = currentOperationScreen.textContent
      .toString()
      .slice(0, -1);
  }
  return;
}

function roundResult(number) {}

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a) / Number(b);
}

function operate() {
  const nums = currentOperationScreen.textContent
    .toString()
    .split(currentOperation);
  firstOperand = nums[0];
  secondOperand = nums[1];

  switch (currentOperation) {
    case "*":
      currentOperationScreen.textContent = multiply(
        firstOperand,
        secondOperand
      );
      currentOperation = null;
      break;
    case "+":
      currentOperationScreen.textContent = add(firstOperand, secondOperand);
      currentOperation = null;

      break;
    case "-":
      currentOperationScreen.textContent = subtract(
        firstOperand,
        secondOperand
      );
      currentOperation = null;

      break;
    case "/":
      if (secondOperand === 0) {
        currentOperationScreen.textContent = "Cant divide by 0";
        clear();
      }
      currentOperationScreen.textContent = divide(firstOperand, secondOperand);
      currentOperation = null;
      break;
    default:
      break;
  }
}
