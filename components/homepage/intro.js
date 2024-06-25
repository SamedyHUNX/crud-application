'use strict';

// INTRODUCTION
// SLOGAN AND INTRODUCTION
let intros = Array.from(document.querySelectorAll('.intro'));

intros.forEach((intro, idx) => {
    // CREATE DIV ELEMENT
    const divElement = document.createElement('div');

    divElement.classList.add('first');
    
    Object.keys(introArray).forEach((key, index) => {
        // CREATING P ELEMENT(S) BASED ON THE NUMBER OF ELEMENTS WITHIN THE OBJECT
        const pElement = document.createElement('p')

        // ADDING TEXT TO P ELEMENT
        pElement.textContent = introArray[key];

        divElement.appendChild(pElement);
    })

    intro.appendChild(divElement)
})

// MARKING THE END OF THE INTRO OF THE HOMEPAGE SECTION..

