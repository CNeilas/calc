// 1. take the values out of html
// 2. Populate the display with numbers and an operator
// 3. if there is an operator already populate the second number
// 4. make functions for all the operators
// 5. take out the display thing and according to the operator make an operation

// taking display
let display = document.getElementsByClassName("display")
let firstNum = document.getElementById("one")
let secondNum = document.getElementById("two")
let operator = document.getElementById("operator")

// taking buttons and ops wagwan
let numbers = document.getElementsByClassName("number")
let operators = document.getElementsByClassName("op")
let equals = document.getElementsByClassName("equals")
let clear = document.getElementById("C")

// operator and firstNum is not selected and not equals yet
let operationHappening = false
let isFirstNumber = false
let isEqual = true

// function for populating display with numbers
const handleNumbers = e => {
    let value = e.target.innerHTML

    if (operationHappening) {
        if (secondNum.innerHTML == "_" ) {
            secondNum.innerHTML = ""
        }
        secondNum.innerHTML += value
    } else if (!operationHappening) {
        if (firstNum.innerHTML == "_" ) {
            firstNum.innerHTML = ""
        }
        firstNum.innerHTML += value
        // firstNum is now selected
        isFirstNumber = true
    }
}

for (let number of numbers) {
    number.addEventListener("click", handleNumbers)
}

// function for selecting operator

const handleOperators = e => {
    let op = e.target.innerHTML
    if (isFirstNumber) {
        operator.innerHTML = op
        operationHappening = true
    } else if (!isFirstNumber) {
        alert("select a number first")
    }
}

for (let opButton of operators) {
    opButton.addEventListener("click", handleOperators)
}