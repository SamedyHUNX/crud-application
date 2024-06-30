"use strict";

const sectionInput = Array.from(
  document.querySelectorAll("section.input-container")
);

sectionInput.forEach((input, idx) => {
  input.innerHTML += `
    <input type='text' id='note-input' placeholder='Enter your thought'></input>
    <button id='add-note-button'>Add Note</button>
    <ul id='notes-list'></ul>
    `;
});
