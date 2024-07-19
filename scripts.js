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
    } else if (operator === 'substract') {
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
            if (firstNumber == 0) {
                if (inputNumber.textContent == 0) {
                    inputNumber.textContent = button.id;
                } else {
                    inputNumber.textContent += button.id;
                }
            }
            if (firstNumber > 0 && firstNumber == Number(inputNumber.textContent)) {
                inputNumber.textContent = 0;
            }
            if (firstNumber > 0 && firstNumber != Number(inputNumber.textContent)) {
                if (inputNumber.textContent == 0) {
                    inputNumber.textContent = button.id;
                } else {
                    inputNumber.textContent += button.id;
                }
            }
        });
    }});

buttons.forEach(button => {
    if (button.id <= 9) {
    button.addEventListener('click', () => {
        if (firstNumber == 0) {
            if (inputNumber.textContent == 0) {
                inputNumber.textContent = button.id;
            } else {
                inputNumber.textContent += button.id;
            }
        }
        if (firstNumber != 0 && firstNumber == Number(inputNumber.textContent)) {
            inputNumber.textContent = 0;
        }
        if (firstNumber != 0 && firstNumber != Number(inputNumber.textContent)) {
            if (inputNumber.textContent == 0) {
                inputNumber.textContent = button.id;
            } else {
                inputNumber.textContent += button.id;
            }
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
        firstNumber = 0;
        secondNumber = 0;
    });
    // Not working for now //
    // if (inputNumber.textContent !== "0") {
    //     buttons[0].textContent = "C"
    // }
}});
// plusminus
buttons.forEach(button => {
    if (button.id == 'plusminus') {
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


// EventListener for all operator button //
buttons.forEach(button => {
    if (button.id == 'add') {
            button.addEventListener('click', () => {
                if (firstNumber == 0) {
                    operator = "add";
                    firstNumber = Number(inputNumber.textContent);
                    // inputNumber.textContent = 0;
                } else if (firstNumber != 0) {
                    operator = "add";
                    firstNumber += Number(inputNumber.textContent);
                    inputNumber.textContent = firstNumber;
                }
            });
    }});

buttons.forEach(button => {
    if (button.id == 'substract') {
        button.addEventListener('click', () => {
            if (firstNumber == 0) {
                operator = "substract";
                firstNumber = Number(inputNumber.textContent);
            } else if (firstNumber != 0) {
                operator = "substract";
                firstNumber -= Number(inputNumber.textContent);
                inputNumber.textContent = firstNumber;
            }
        });
}});

buttons.forEach(button => {
    if (button.id == 'multiply') {
        button.addEventListener('click', () => {
            if (firstNumber == 0) {
                operator = "multiply";
                firstNumber = Number(inputNumber.textContent);
            } else if (firstNumber != 0) {
                operator = "multiply";
                firstNumber *= Number(inputNumber.textContent);
                inputNumber.textContent = firstNumber;
            }
        });
}});

buttons.forEach(button => {
    if (button.id == 'divide') {
        button.addEventListener('click', () => {
            if (firstNumber == 0) {
                operator = "divide";
                firstNumber = Number(inputNumber.textContent);
            } else if (firstNumber != 0) {
                operator = "divide";
                firstNumber /= Number(inputNumber.textContent);
                inputNumber.textContent = firstNumber;
            }
        });
}});

console.log();
    
// To-Dos
// Let number in display blink when user presses operator
// // append child with blink animation, take away when blinked one time

// DONE //
// make chain-additioning possible (like 12 + 12 + 12)
// // should show result of first addition when pressing the second 'add'