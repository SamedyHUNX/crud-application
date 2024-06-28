'use strict';

// INTRODUCTION
// SLOGAN AND INTRODUCTION
let intros = [document.querySelectorAll('.intro')];

intros.forEach((intro, idx) => {
    // CREATE DIV ELEMENT
    const divElement = document.createElement('div');

    divElement.classList.add('first');
    
    // LINKING TO INTRO ARRAY
    // dynamically create h1, h3, p elements
    const h1Element = document.createElement('h1');
    h1Element.classList.add('intro-common');
    h1Element.textContent = introArray[idx];
    const h3Element = document.createElement('h3');
    h3Element.classList.add('intro-common');
    h3Element.textContent = introArray[idx + 1];
    const pElement = document.createElement('p');
    pElement.classList.add('intro-common');
    pElement.textContent = introArray[idx + 2];

    // appending them to the main div container
    divElement.append(h1Element, h3Element, pElement);

    intro.prepend(divElement);
})

// MARKING THE END OF THE INTRO OF THE HOMEPAGE SECTION..

