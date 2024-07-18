// Date event screen
const today = new Date();
const date = today.getDate() + '-' + (today.getMonth()+1 + '-' + today.getFullYear());
const dateSelector = document.querySelector('.date')
const showDate = document.createElement('p')
dateSelector.appendChild(showDate)
dateSelector.textContent = date

// Time event sceen
const time = today.getHours() + ":" + today.getMinutes();
const timeSelector = document.querySelector('.time')
const showtime = document.createElement('p')
timeSelector.appendChild(showtime)
timeSelector.textContent = time

// All eventListener for each button
const buttons = document.querySelectorAll('.inputButton')
const zeroButton = document.querySelectorAll('.inputButtonZero')
const inputNumber = document.querySelector('p.inputNumber')

// Basic math functions with single operators
const add = (a, b) => a + b;
const substrac = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Variables for holding user input
let firstNumber = 0;
let operator = '';
let secondNumber = 0;

// Function to calculate result
const operate = (firstNumber, operator, secondNumber) => {
    let result = 0;
    if (operator === 'add') {
        result = add(firstNumber, secondNumber);
    } else if (operator === 'minus') {
        result = substrac(firstNumber, secondNumber);
    } else if (operator === 'multiply') {
        result = multiply(firstNumber, secondNumber);
    } else if (operator === 'divide') {
        result = divide(firstNumber, secondNumber);
    }
    inputNumber.textContent = result;
}

// EventListener for alle numeric buttons + dot
zeroButton.forEach(button => {
    if (button.id == 0) {
    button.addEventListener('click', () => {
        if (inputNumber.textContent == 0) {
            inputNumber.textContent = button.id;
        } else {
            inputNumber.textContent += button.id;
        }
    });
}});

buttons.forEach(button => {
    if (button.id <= 9) {
    button.addEventListener('click', () => {
        if (inputNumber.textContent == 0) {
            inputNumber.textContent = button.id;
        } else {
            inputNumber.textContent += button.id;
        }
    });
}});

buttons.forEach(button => {
    if (button.id == 'dot') {
    button.addEventListener('click', () => {
        if (inputNumber.textContent.includes(".") === false) {
            if (inputNumber.textContent == 0) {
                inputNumber.textContent = 0;
            } else {
                inputNumber.textContent += ".";
            }
        }
    });
}});

//Event Listener for all grey buttons
// AC
buttons.forEach(button => {
    if (button.id == 'ac') {
    button.addEventListener('click', () => {
        inputNumber.textContent = "0";
    });
    // Not working for now //
    // if (inputNumber.textContent !== "0") {
    //     buttons[0].textContent = "C"
    // }
}});
// plusMinus
buttons.forEach(button => {
    if (button.id == 'plusMinus') {
    button.addEventListener('click', () => {
        let numberSafe = inputNumber.textContent;
        numberSafe *= -1
        inputNumber.textContent = numberSafe;
    });
}});
// percentage
buttons.forEach(button => {
    if (button.id == 'percentage') {
    button.addEventListener('click', () => {
        let numberSafe = inputNumber.textContent;
        numberSafe /= 100
        inputNumber.textContent = numberSafe;
    });
}});


// EventListener for result
buttons.forEach(button => {
    if (button.id == 'result') {
    button.addEventListener('click', () => {
        secondNumber = Number(inputNumber.textContent);
        operate(firstNumber, operator, secondNumber)
    });
}});


// EventListener for all operator button
buttons.forEach(button => {
    if (button.id == 'add') {
        button.addEventListener('click', () => {
            operator = "add";
            firstNumber = Number(inputNumber.textContent);
            inputNumber.textContent = 0;
        });
    }});
buttons.forEach(button => {
    if (button.id == 'substract') {
        button.addEventListener('click', () => {
            operator = "minus";
            firstNumber = Number(inputNumber.textContent);
            inputNumber.textContent = 0;
        });
    }});
buttons.forEach(button => {
    if (button.id == 'multiply') {
        button.addEventListener('click', () => {
            operator = "multiply";
            firstNumber = Number(inputNumber.textContent);
            inputNumber.textContent = 0;
        });
    }});
buttons.forEach(button => {
    if (button.id == 'divide') {
        button.addEventListener('click', () => {
            operator = "divide";
            firstNumber = Number(inputNumber.textContent);
            inputNumber.textContent = 0;
        });
    }});