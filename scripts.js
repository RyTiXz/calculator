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

// Variables for storing user input
let displayVariable = 0;
let result = null;
let operator = '';

// EventListener for alle numeric buttons + dot
zeroButton.forEach(button => {
    if (button.id == 0) {
        button.addEventListener('click', () => {
            if (displayVariable == 0) {
                if (inputNumber.textContent == '0') {
                    inputNumber.textContent = button.id;
                } else {
                    inputNumber.textContent += button.id;
                }
            } 
            if (result == Number(inputNumber.textContent)) {
                inputNumber.textContent = 0;
                displayVariable = 0;
                result = 0;
                if (inputNumber.textContent == '0') {
                    inputNumber.textContent = button.id;
                } else {
                    inputNumber.textContent += button.id;
                }
            }
            if (displayVariable != 0 && displayVariable == Number(inputNumber.textContent)) {
                inputNumber.textContent = '0';
            }
            if (displayVariable != 0 && displayVariable != Number(inputNumber.textContent)) {
                if (inputNumber.textContent == '0') {
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
            if (displayVariable == 0) {
                if (inputNumber.textContent == '0') {
                    inputNumber.textContent = button.id;
                } else {
                    inputNumber.textContent += button.id;
                }
            } 
            else if (result == Number(inputNumber.textContent)) {
                inputNumber.textContent = 0;
                displayVariable = 0;
                result = 0;
                if (inputNumber.textContent == '0') {
                    inputNumber.textContent = button.id;
                } else {
                    inputNumber.textContent += button.id;
                }
            }
            if (displayVariable != 0 && displayVariable == inputNumber.textContent) {
                inputNumber.textContent = '0';
            }
            if (displayVariable != 0 && displayVariable != inputNumber.textContent) {
                if (inputNumber.textContent == '0') {
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
                inputNumber.textContent = "0.";
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
        displayVariable = 0;
        result = null;
        operator = '';
    });

}});
// plusminus
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

// Basic math functions with single operators
const calculate = (a, b) => {
    if (operator == '+') {
        return (Number(a) + Number(b))
    } else if (operator == '-') {
        return (Number(a) - Number(b))
    } else if (operator == '*') {
        return (Number(a) * Number(b))
    } else if (operator == '/') {
        return (Number(a) / Number(b))
    }
}

// EventListener for result
buttons.forEach(button => {
    if (button.id == 'result') {
    button.addEventListener('click', () => {
        result = calculate(displayVariable, inputNumber.textContent);
        inputNumber.textContent = result;
        result = 0;
        displayVariable = 0
        operator = ''
    });
}});


// EventListener for all operator button //

buttons.forEach(button => {
    if (button.id == 'add') {
        button.addEventListener('click', () => {
            if (displayVariable == 0) {
                operator = '+';
                displayVariable = inputNumber.textContent
            } else {
                displayVariable = calculate(displayVariable, inputNumber.textContent);
                inputNumber.textContent = displayVariable;
                operator = '+'
            }
        });
    }
    if (button.id == 'substract') {
        button.addEventListener('click', () => {
            if (displayVariable == 0) {
                operator = '-';
                displayVariable = inputNumber.textContent
            } else {
                displayVariable = calculate(displayVariable, inputNumber.textContent);
                inputNumber.textContent = displayVariable;
                operator = '-'
            }
        });
    }
    if (button.id == 'multiply') {
        button.addEventListener('click', () => {
            if (displayVariable == 0) {
                operator = '*';
                displayVariable = inputNumber.textContent
            } else {
                displayVariable = calculate(displayVariable, inputNumber.textContent);
                inputNumber.textContent = displayVariable;
                operator = '*'
            }
        });
    }
    if (button.id == 'divide') {
        button.addEventListener('click', () => {
            if (displayVariable == 0) {
                operator = '/';
                displayVariable = inputNumber.textContent
            } else {
                displayVariable = calculate(displayVariable, inputNumber.textContent);
                inputNumber.textContent = displayVariable;
                operator = '/'
            }
        });
    }
});
/*
To-Dos:
// Chain operations not working correctly for now. should use
result of first operation and calculate with this the second
and so on.

First operator sets an operator, if there already is one,
the first operation should be calculated.

// numbers should be rounded to 2 decimals 
*/
