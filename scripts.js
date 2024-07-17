// Basic math functions with single operators
const add = (a, b) => a + b;
const substrac = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Variables for holding user input
const firstNumber = 5;
const operator = '';
const secondNumber = 3;

// Function to calculate result
const operate = () => {
    let result = 0;
    if (operator === '+') {
        result = add(firstNumber, secondNumber);
    } else if (operator === '-') {
        result = substrac(firstNumber, secondNumber);
    } else if (operator === '*') {
        result = multiply(firstNumber * secondNumber);
    } else if (operator === '/') {
        result = divide(firstNumber / secondNumber);
    }
    return result;
}

