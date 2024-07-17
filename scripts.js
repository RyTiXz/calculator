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

// All eventListener for each button
const buttons = document.querySelectorAll('.inputButton')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        console.log(buttons[i].id);
    })
}

// Date event
const today = new Date();
const date = today.getDate() + '-' + (today.getMonth()+1 + '-' + today.getFullYear());
const dateSelector = document.querySelector('.date')
const showDate = document.createElement('p')
dateSelector.appendChild(showDate)
dateSelector.textContent = date

// Time event
const time = today.getHours() + ":" + today.getMinutes();
const timeSelector = document.querySelector('.time')
const showtime = document.createElement('p')
timeSelector.appendChild(showtime)
timeSelector.textContent = time