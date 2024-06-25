'use strict';

// BUTTON ELEMENTS
const buttonDiv = Array.from(document.getElementsByClassName('__button'));

buttonDiv.forEach((button, index) => {
    const buttonElement1 = document.createElement('button');
    const buttonElement2 = document.createElement('button');
    const imgElement1 = document.createElement('img');
    const imgElement2 = document.createElement('img'); 

    // first button
    imgElement1.setAttribute('src', buttonSource['first']);
    buttonElement1.appendChild(imgElement1)

    // second button
    imgElement2.setAttribute('src', buttonSource['second']);
    buttonElement2.appendChild(imgElement2)

    button.append(buttonElement1, buttonElement2);
})

// MARKING THE END OF BUTTON ELEMENT STYLING..