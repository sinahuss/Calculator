const buttons = document.querySelector('.buttons');
const CE = document.getElementById('CE');
const C = document.getElementById('C');
const DEL = document.getElementById('DEL');

var mainDisplay = document.querySelector('.main');
var previousDisplay = document.querySelector('.previous');
var input;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operation, num1, num2) {
    return operation(num1, num2);
}

/* function updateMain(num) {
    mainDisplay.innerText += num;
} */

buttons.addEventListener('click', e => {
    let num = e.target.innerText;
    if (!isNaN(num) || num == '.') {
        mainDisplay.innerText += num;
    }
}, true);

CE.addEventListener('click', () => {
    mainDisplay.innerText = '';
    previousDisplay.innerText = '';
});

C.addEventListener('click', () => {
    mainDisplay.innerText = '';
});

DEL.addEventListener('click', () => {
    mainDisplay.innerText = '';
});