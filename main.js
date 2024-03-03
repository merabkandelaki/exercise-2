// 1. Function Declarations:
// 1-1. **Greeting Function:**
let inputFieldName = document.querySelector(".input-name");
let resultGreeting = document.querySelector(".result-name");
function greet() {
  let name = inputFieldName.value;
  if (!name) {
    resultGreeting.innerText = "Please Enter the Name";
  } else {
    resultGreeting.innerText = `Hello ${name}`;
    inputFieldName.value = "";
  }
}
// 1-2. **Addition Function:**
let inputFieldFirstNumber = document.querySelector(".input-first-number");
let inputFieldSecondNumber = document.querySelector(".input-second-number");
let resultAddition = document.querySelector(".addition");
function add() {
  let firstNumber = Number(inputFieldFirstNumber.value);
  let secondNumber = Number(inputFieldSecondNumber.value);
  resultAddition.value = (firstNumber + secondNumber).toFixed(1);
}

// 2. Function Expressions:
// 2-1. **Multiply Function:**
let inputFieldThirdNumber = document.querySelector(".input-third-number");
let inputFieldFourthNumber = document.querySelector(".input-fourth-number");
let resultMultiply = document.querySelector(".multiply");
const multiply = function () {
  let thirdNumber = Number(inputFieldThirdNumber.value);
  let fourthNumber = Number(inputFieldFourthNumber.value);
  resultMultiply.value = (thirdNumber * fourthNumber).toFixed(1);
};
// 2-2. **Subtraction Function:**
let inputFieldFifthNumber = document.querySelector(".input-fifth-number");
let inputFieldSixthNumber = document.querySelector(".input-sixth-number");
let resultSubtraction = document.querySelector(".subtraction");
const subtraction = function () {
  let fifthNumber = Number(inputFieldFifthNumber.value);
  let sixthNumber = Number(inputFieldSixthNumber.value);
  resultSubtraction.value = (fifthNumber - sixthNumber).toFixed(1);
};

// 3. Arrow Function:
// 3-1. **Division Function:**
let inputFieldSeventhNumber = document.querySelector(".input-seventh-number");
let inputFieldEighthNumber = document.querySelector(".input-eighth-number");
let resultDivide = document.querySelector(".divide");
const divide = () => {
  let seventhNumber = Number(inputFieldSeventhNumber.value);
  let eighthNumber = Number(inputFieldEighthNumber.value);
  resultDivide.value = (seventhNumber / eighthNumber).toFixed(1);
};

// 4. Generator Function Exercise:
// 4-1. **Generator:**
let inputFieldStartNumber = document.querySelector(".input-start-number");
let inputFieldEndNumber = document.querySelector(".input-end-number");
let resultRange = document.querySelector(".range");
function range() {
  let finalNumbers = [];
  let endNumber = Number(inputFieldEndNumber.value);
  let startNumber = Number(inputFieldStartNumber.value);
  while (startNumber <= endNumber) {
    finalNumbers.push(startNumber);
    startNumber++;
  }
  resultRange.innerText = finalNumbers;
}

// 5. Immediately Invoked Function Expression (IIFE):
// 5-1. **ფაქტორიალი**:
let inputFieldNinthNumber = document.querySelector(".input-ninth-number");
let resultFactorial = document.querySelector(".factorial");
const factorial = function () {
  let ninthNumber = Number(inputFieldNinthNumber.value);
  let finalNumber = Number(inputFieldNinthNumber.value);
  for (let i = 1; i <= ninthNumber - 1; i++) {
    finalNumber = finalNumber * i;
  }
  resultFactorial.value = finalNumber;
};
// 5-2. **ფაქტორიალი (IIFE)**:
const factorialNumber = (function () {
  let resultfactorial = 5;
  for (let i = resultfactorial - 1; i > 1; i--) {
    resultfactorial *= i;
  }
  return resultfactorial;
})();
console.log(factorialNumber);
