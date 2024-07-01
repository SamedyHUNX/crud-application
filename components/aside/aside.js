"use strict";

const asideElement = document.querySelector("aside");

asideElement.innerHTML += `
    <div class='header-container'>
        <img src='./assets/svg/home.svg'>
        <p>All Notes</p>
        <img src='./assets/svg/add.svg'>
    </div>
    <ul class="notes-list"></ul>
`;
