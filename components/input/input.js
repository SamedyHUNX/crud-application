"use strict";

const sectionInput = Array.from(
  document.querySelectorAll("section.input-container")
);

sectionInput.forEach((input, idx) => {
  input.innerHTML += `
    <div id='title-input' contenteditable="true" placeholder='Title...'></div>
    <div id='date-input' contenteditable="true" placeholder='Date'></div>
    <div id="note-input" contenteditable="true" placeholder='Enter your thought'></div>
    <div class='buttonContainer'></div>
    `;
});
