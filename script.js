const buttons = document.querySelector('.buttons');

for(let i = 0; i <= 9; i++) {
    const button = document.createElement('button');
    button.innerText = `${i}`;
    buttons.appendChild(button);
}

