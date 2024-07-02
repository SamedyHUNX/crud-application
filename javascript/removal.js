"use strict";

// TO REMOVE ADDITIONAL ITEM ON A SPECIIFIC PAGE
const toRemove = document.querySelector(".custom-button a");

toRemove.removeAttribute("href");

const closeLogo = document.getElementById('close-logo');
closeLogo.addEventListener('click', () => {
    asideElement.classList.toggle('hidden');
})
// MARKING THE END