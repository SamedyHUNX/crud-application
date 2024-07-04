"use strict";

// ASIDE ELEMENT INJECTION
const asideElement = document.querySelector("aside");

asideElement.innerHTML += `
    <div class='header-container'>
        <a href='./index.html'>
            <img src='./assets/svg/home.svg'>
        </a>
        <p>Diary</p>
        <div class='aside-right'>
            <img src='./assets/svg/add.svg'>
            <img id='close-logo' src='./assets/svg/close.svg'>
        </div>
    </div>
    <ul class="notes-list"></ul>
`;
// MARKING THE END