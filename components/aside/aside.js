"use strict";

const asideElement = document.querySelector("aside");

asideElement.innerHTML += `
    <div class='header-container'>
        <a href='./index.html'>
            <img src='./assets/svg/home.svg'>
        </a>
        <p>Diary Application</p>
        <img src='./assets/svg/add.svg'>
    </div>
    <ul class="notes-list"></ul>
`;
