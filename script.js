const buttons = document.querySelector('.buttons');
const operations = document.querySelector('.operation');

var mainDisplay = document.querySelector('.main');
var previousDisplay = document.querySelector('.previous');

var reset = true;
var firstInput = '';
var secondInput = '';

var key = 'default';

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

function equals(num1, num2) {
    return num1;
}

//Create Object literal to avoid using switch or long if/else statements while
//allowing more actions to be added
const actions = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
    'default': equals
};

function operate(operation, num1, num2) {
    return operation(num1, num2);
}

buttons.addEventListener('click', e => {
    let button = e.target;

    if (button.className == 'input') {
        if (reset) {
            mainDisplay.innerText = button.innerText;
            reset = false;
        } else {
            mainDisplay.innerText += button.innerText;
        }
    }

    else if (button.className == 'operation') {
        if (firstInput != '' && !reset){
            secondInput = parseFloat(mainDisplay.innerText);
            firstInput = operate(actions[key], firstInput, secondInput);
            mainDisplay.innerText = parseFloat(firstInput.toFixed(7));
            secondInput = '';
        }

        key = button.innerText;

        if (firstInput == '') {
            firstInput = parseFloat(mainDisplay.innerText);
        }
        
        previousDisplay.innerText = firstInput + ' ' + key + ' ' + secondInput;

        reset = true;
    }

    else if (button.id == 'equals') {
        if (key == 'default') {
            firstInput = parseFloat(mainDisplay.innerText);
            previousDisplay.innerText = firstInput + ' =';
        } else {
            secondInput = reset ? firstInput : parseFloat(mainDisplay.innerText);
            previousDisplay.innerText = firstInput + ' ' + key + ' ' + secondInput + ' =';
        }
        mainDisplay.innerText = parseFloat(operate(actions[key], firstInput, secondInput).toFixed(7));
        firstInput = '';
        secondInput = '';
        key = 'default';
        reset = true;
    }
    
    else if (button.id == 'CE') {
        mainDisplay.innerText = '0';
        reset = true;
    }
    
    else if (button.id == 'C') {
        firstInput = '';
        secondInput = '';
        mainDisplay.innerText = '0';
        previousDisplay.innerText = '';
        reset = true;
    }
    
    else if (button.id == 'DEL') {
        mainDisplay.innerText = mainDisplay.innerText.slice(0, -1);
        if (mainDisplay.innerText == '') {
            mainDisplay.innerText = '0';
            reset = true;
        }
    }
}, true);