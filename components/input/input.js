"use strict";

const sectionInput = Array.from(
  document.querySelectorAll("section.input-container")
);

sectionInput.forEach((input, idx) => {
  input.innerHTML += `
    <input id='title-input' class='placeholder' placeholder='Give your note a Title'>
    <input id='date-input' class='placeholder' placeholder='What day is it?'>
    <input id="note-input" class='placeholder' placeholder='Write down your thoughts and let your ideas flow...'>
    <div class='buttonContainer'></div>
    `;
});

