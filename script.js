// Selecting display elements
let display = document.querySelector(".display");
let firstNum = document.getElementById("one");
let secondNum = document.getElementById("two");
let operator = document.getElementById("operator");

// Selecting buttons and operators
let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("op");
let equals = document.querySelector(".equals");
let clear = document.querySelector(".C");

// State variables
let operationHappening = false;
let isSecondNumber = false;
let resultDisplayed = false;

// Function for populating display with numbers
const handleNumbers = (e) => {
  let value = e.target.innerHTML;

  if (resultDisplayed) {
    firstNum.innerHTML = value;
    secondNum.innerHTML = '';
    operator.innerHTML = '';
    operationHappening = false;
    isSecondNumber = false;
    resultDisplayed = false;
  } else if (operationHappening) {
    secondNum.innerHTML += value;
    isSecondNumber = true;
  } else {
    firstNum.innerHTML += value;
  }
};

for (let number of numbers) {
  number.addEventListener("click", handleNumbers);
}

// Function for selecting operator
const handleOperators = (e) => {
  let op = e.target.innerHTML;

  if (isSecondNumber) {
    firstNum.innerHTML = calculate(
      operator.innerHTML,
      firstNum.innerHTML,
      secondNum.innerHTML
    );
    secondNum.innerHTML = '';
    operator.innerHTML = op;
    isSecondNumber = false;
    operationHappening = true;
    resultDisplayed = false;
  } else if (firstNum.innerHTML !== '') {
    operator.innerHTML = op;
    operationHappening = true;
    resultDisplayed = false;  // Allow chaining after equals
  }
};

for (let opButton of operators) {
  opButton.addEventListener("click", handleOperators);
}

// Function for handling equals
const handleEquals = () => {
  if (firstNum.innerHTML !== '' && secondNum.innerHTML !== '' && operator.innerHTML !== '') {
    firstNum.innerHTML = calculate(
      operator.innerHTML,
      firstNum.innerHTML,
      secondNum.innerHTML
    );
    operator.innerHTML = '';
    secondNum.innerHTML = '';
    resultDisplayed = true;
    operationHappening = false;
    isSecondNumber = false;
  }
};

equals.addEventListener("click", handleEquals);

// Function for handling clear
const handleClear = () => {
  firstNum.innerHTML = '';
  secondNum.innerHTML = '';
  operator.innerHTML = '';
  operationHappening = false;
  isSecondNumber = false;
  resultDisplayed = false;
};

clear.addEventListener("click", handleClear);

// Calculation function
const calculate = (op, num1, num2) => {
  let result;
  switch (op) {
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '-':
      result = Number(num1) - Number(num2);
      break;
    case '/':
      result = Number(num1) / Number(num2);
      break;
    case '*':
      result = Number(num1) * Number(num2);
      break;
    default:
      result = 'Error';
  }

  return formatResult(result);
};

// Function for formatting result
const formatResult = (result) => {
  if (result % 1 !== 0) {
    return result.toFixed(3);
  }
  return result;
};
