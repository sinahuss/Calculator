# Calculator

For access to the live web page, I used [GitHub Pages](https://sinahuss.github.io/Calculator/)  

I've created a calculator to further practice my skills in JavaScript and the DOM. Below are my thoughts and list of points I've learned while completing this project.  

- Most of the work was in keeping the order of operations stable.
- I used an Object literal as opposed to a switch statement for each of the operations, so that more operations could be added in the future.
- I used event delegation for the HTML/JavaScript interaction, but in this instance it may have been better to use separate events for each button.
    - Using multiple if/else statements does not seem optimal to me, so maybe I could have created an Object literal for each of the cases.
- I mainly used innerText to access the elements of the display. I'm not sure if this is optimal, so I may come back to this in the future.