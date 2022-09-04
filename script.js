const buttons = document.querySelector('.buttons');
var input;

for(let i = 9; i >= 0; i--) {
    const button = document.createElement('button');
    button.innerText = `${i}`;
    buttons.appendChild(button);


}

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

buttons.addEventListener('click', e => console.log(e.target.innerText), true);