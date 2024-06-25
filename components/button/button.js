'use strict';

// BUTTON ELEMENTS
const buttonDiv = Array.from(document.getElementsByClassName('__button'));

buttonDiv.forEach((button, index) => {
    const buttonElement1 = document.createElement('button');

    buttonElement1.textContent = buttonStatic['first'];

    const buttonElement2 = document.createElement('button');

    buttonElement2.textContent = buttonStatic['second'];

    button.append(buttonElement1, buttonElement2);
})

// MARKING THE END OF BUTTON ELEMENT STYLING..