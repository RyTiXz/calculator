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

// // DOM manipulator through user click
// buttons.forEach(button => {
//     if (button.id == 'divide' || button.id == 'multiply' || button.id == 'substract' || button.id == 'add')
//         button.addEventListener('click', () => {
//         console.log('hello');
//     });
// });

// Basic math functions with single operators
const add = (a, b) => Number(a + b);
const substrac = (a, b) => Number(a - b);
const multiply = (a, b) => Number(a * b);
const divide = (a, b) => Number(a / b);

// Variables for storing user input
let display = 0;

// EventListener for alle numeric buttons + dot
zeroButton.forEach(button => {
    if (button.id == 0) {
        button.addEventListener('click', () => {
            if (display == 0) {
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
            if (display == 0) {
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
        display = 0;
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


// EventListener for result
buttons.forEach(button => {
    if (button.id == 'result') {
    button.addEventListener('click', () => {
        console.log('result but no output');
    });
}});


// EventListener for all operator button //
buttons.forEach(button => {
    if (button.id == 'add') {
            button.addEventListener('click', (e) => {

            });
    }});

buttons.forEach(button => {
    if (button.id == 'substract') {
        button.addEventListener('click', () => {

        });
}});

buttons.forEach(button => {
    if (button.id == 'multiply') {
        button.addEventListener('click', () => {

        });
}});

buttons.forEach(button => {
    if (button.id == 'divide') {
        button.addEventListener('click', () => {

        });
}});