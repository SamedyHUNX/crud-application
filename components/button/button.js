'use strict';

// BUTTON ELEMENTS
const buttonDiv = Array.from(document.getElementsByClassName('buttonContainer'));

function createButton() {
    // create a new button element
    buttonDiv.forEach((button, idx) => {
        const buttonElement = document.createElement('button');
        const aElement = document.createElement('a');

        // set button text
        aElement.textContent = buttonArray[idx].text;

        // add the class
        buttonElement.className = buttonArray[idx].class;


        // add the ref
        aElement.setAttribute('href', buttonArray[idx].href)

        // append button to the container
        buttonElement.appendChild(aElement)
        button.appendChild(buttonElement);
    })
}

createButton();
// MARKING THE END OF BUTTON ELEMENT STYLING..