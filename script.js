// taking display
let display = document.querySelector(".display");
let firstNum = document.getElementById("one");
let secondNum = document.getElementById("two");
let operator = document.getElementById("operator");

// taking buttons and ops wagwan
let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("op");
let equals = document.querySelector(".equals");
let clear = document.querySelector(".C");

// operator and firstNum is not selected and not equals yet
let operationHappening = false;
let isFirstNumber = false;
let isSecondNumber = false;
let isEqual = false;

// function for populating display with numbers
const handleNumbers = (e) => {
  let value = e.target.innerHTML;

  if (operationHappening) {
    if (secondNum.innerHTML == "_") {
      secondNum.innerHTML = "";
    }
    secondNum.innerHTML += value;
    isSecondNumber = true;
  } else if (!operationHappening) {
    if (firstNum.innerHTML == "_") {
      firstNum.innerHTML = "";
    }
    firstNum.innerHTML += value;
    // firstNum is now selected
    isFirstNumber = true;
  }
};

for (let number of numbers) {
  number.addEventListener("click", handleNumbers);
}

// function for selecting operator

const handleOperators = (e) => {

  let op = e.target.innerHTML;
      if (isEqual) {
        let firstNum = display.innerHTML
        display.innerHTML += operator
        
    }
  operator.innerHTML = op;
  operationHappening = true;
};

for (let opButton of operators) {
  opButton.addEventListener("click", handleOperators);
}

// wtf do i do for the equals XDDDD

const handleEquals = () => {
  display.innerHTML = calculate(
    operator.innerHTML,
    firstNum.innerHTML,
    secondNum.innerHTML
  );
  isEqual = true;

  console.log(
    calculate(operator.innerHTML, firstNum.innerHTML, secondNum.innerHTML)
  );
};

const calculate = (op, num1, num2) => {
  switch (op) {
    case "+":
      return Number(num1) + Number(num2);
      break;
    case "-":
      return Number(num1) - Number(num2);
      break;
    case "/":
      return Number(num1) / Number(num2);
      break;
    case "*":
      return Number(num1) * Number(num2);
      break;
  }
};

equals.addEventListener("click", handleEquals);
