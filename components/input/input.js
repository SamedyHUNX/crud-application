"use strict";

const sectionInput = Array.from(
  document.querySelectorAll("section.input-container")
);

sectionInput.forEach((input, idx) => {
  input.innerHTML += `
    <div id="note-input" contenteditable="true" placeholder='Enter your thought'></div>
    <div class='buttonContainer'></div>
    <ul id='notes-list'></ul>
    `;
});
