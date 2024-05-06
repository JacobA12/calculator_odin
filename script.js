let numA = 0;
let numB = 0;

const numberButtons = document.querySelectorAll("[data-number]");
const opeartorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equals-button");
const pointButton = document.getElementById("point-button");
const deleteButton = document.getElementById("del-button");
const clearButton = document.getElementById("clear-button");

function add(numA, numB) {
  return numA + numB;
}

function subtract(numA, numB) {
  return numA - numB;
}

function multiply(numA, numB) {
  return numA * numB;
}

function divide(numA, numB) {
  return numA / numB;
}
