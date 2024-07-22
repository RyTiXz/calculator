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
            if (inputNumber.textContent.length < 7){
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
            }
        });
    }});

buttons.forEach(button => {
    if (button.id <= 9) {
        button.addEventListener('click', () => {
            if (inputNumber.textContent.length < 7){
                if (displayVariable == 0) {
                    if (inputNumber.textContent == '0') {
                        inputNumber.textContent = button.id;
                    } else {
                        inputNumber.textContent += button.id;
                    }
                } 
                else if (result == inputNumber.textContent) {
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
    let calculateResult;
    if (operator == '+') {
        // console.log('add =' + (Number(a) + Number(b).toFixed(2)));
        calculateResult = ((Number(a) + Number(b)).toFixed(3))
    } else if (operator == '-') {
        // console.log('substract =' + (Number(a) - Number(b).toFixed(2)));
        calculateResult = ((Number(a) - Number(b)).toFixed(3))
    } else if (operator == '*') {
        // console.log('multiply =' + (Number(a) * Number(b).toFixed(2)))
        calculateResult = ((Number(a) * Number(b)).toFixed(3))
    } else if (operator == '/') {
        // console.log('divide =' + (Number(a) / Number(b).toFixed(2)))
        calculateResult = ((Number(a) / Number(b)).toFixed(3))
    }
    if (calculateResult % 1 !== 0) {
        return Number(calculateResult).toFixed(2);
    } else {
        return Number(calculateResult).toString();
    }
}

// EventListener for result
buttons.forEach(button => {
    if (button.id == 'result') {
    button.addEventListener('click', () => {
        if (inputNumber.textContent == result) {
            return false;
        } else if (displayVariable != 0) {
            result = calculate(displayVariable, inputNumber.textContent);
            inputNumber.textContent = result;
        } 
    });
}});


// EventListener for all operator button //

buttons.forEach(button => {
    if (button.id == 'add') {
        button.addEventListener('click', () => {
            if (operator == '+') {
                return false
            } else if (inputNumber.textContent == result) {
                operator = '+';
                displayVariable = result;
                result = 0;
            } else if (displayVariable == 0) {
                operator = '+';
                displayVariable = inputNumber.textContent
            } else if (displayVariable != 0 && displayVariable != result) {
                displayVariable = calculate(displayVariable, inputNumber.textContent);
                inputNumber.textContent = displayVariable;
                operator = '+'
            } 
        });
    }
    if (button.id == 'substract') {
        button.addEventListener('click', () => {
            if (operator == '-') {
                return false
            } else if (inputNumber.textContent == result) {
                operator = '-';
                displayVariable = result;
                result = 0;
            } else if (displayVariable == 0) {
                operator = '-';
                displayVariable = inputNumber.textContent
            } else if (displayVariable != 0 && displayVariable != result) {
                displayVariable = calculate(displayVariable, inputNumber.textContent);
                inputNumber.textContent = displayVariable;
                operator = '-'
            }
        });
    }
    if (button.id == 'multiply') {
        button.addEventListener('click', () => {
            if (operator == '*') {
                return false
            } else if (inputNumber.textContent == result) {
                operator = '*';
                displayVariable = result;
                result = 0;
            } else if (displayVariable == 0) {
                operator = '*';
                displayVariable = inputNumber.textContent
            } else if (displayVariable != 0 && displayVariable != result) {
                displayVariable = calculate(displayVariable, inputNumber.textContent);
                inputNumber.textContent = displayVariable;
                operator = '*'
            }
        });
    }
    if (button.id == 'divide') {
        button.addEventListener('click', () => {
            if (operator == '/') {
                return false
            } else if (inputNumber.textContent == result) {
                operator = '/';
                displayVariable = result;
                result = 0;
            } else if (displayVariable == 0) {
                operator = '/';
                displayVariable = inputNumber.textContent
            } else if (displayVariable != 0 && displayVariable != result) {
                displayVariable = calculate(displayVariable, inputNumber.textContent);
                inputNumber.textContent = displayVariable;
                operator = '/'
            }
        });
    }
});


/*
To-Dos:
//

known Bugs:
// double clicking operater results in operating 
// only "AC" works when there are 7 digits on screen
*/