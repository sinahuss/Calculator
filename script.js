const buttons = document.querySelector('.buttons');
const operations = document.querySelector('.operation');

var mainDisplay = document.querySelector('.main');
var previousDisplay = document.querySelector('.previous');

var reset = true;
var phaseOne = true;
var solved = false;

var key;

function add(num1, num2) {
    return Number(num1) + Number(num2);
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

//Create Object literal to avoid using switch or long if/else statements while
//allowing more actions to be added
const actions = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
};

function operate(operation, num1, num2) {
    return operation(num1, num2);
}

/* equals.addEventListener('click', () => {
    mainDisplay.innerText = mainDisplay.innerText
}); */

buttons.addEventListener('click', e => {
    let button = e.target;

    if (button.className == 'input') {

        if (reset) {
            mainDisplay.innerText = button.innerText;
        }

        /* else if (operatingSecond) {
            mainDisplay.innerText = button.innerText;
            operatingSecond = !operatingSecond;
        } */
        
        else {
            mainDisplay.innerText += button.innerText;
        }

        reset = !reset;
    }

    else if (button.className == 'operation') {
        key = button.innerText;
        //if ()
        previousDisplay.innerText = mainDisplay.innerText + ' ' + key;

        reset = !reset;
    }

    else if (button.id == 'equals') {
        previousDisplay.innerText += ' ' + mainDisplay.innerText + ' =';
        mainDisplay.innerText = operate(actions[key],
                        mainDisplay.innerText,
                        parseInt(previousDisplay.innerText));
        
    }
    
    else if (button.id == 'CE') {
        mainDisplay.innerText = '';
        previousDisplay.innerText = '';
    }
    
    else if (button.id == 'C') {
        mainDisplay.innerText = '';
    }
    
    else if (button.id == 'DEL') {
        console.log('del');
    }
}, true);