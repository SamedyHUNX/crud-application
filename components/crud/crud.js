"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const noteInput = document.querySelector("#note-input"); //one time used
  const addNoteBtn = [...document.getElementsByClassName("custom-button")][0]; //one time used
  const notesList = [...document.getElementsByClassName("notes-list")][0]; //one time used
  const addNoteItem = [
    ...document.getElementsByClassName("header-container"),
  ][0].lastElementChild; //one time used

  // Load notes from local storage
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  function renderNotes() {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
      const noteItem = document.createElement("li");

      const noteText = document.createElement("span");
      noteText.textContent = note;
      noteItem.appendChild(noteText);

      // adding the edit button on the li
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => editNote(index));
      noteItem.appendChild(editBtn);

      // adding the delete button on the li as well
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => deleteNote(index));
      noteItem.appendChild(deleteBtn);

      notesList.appendChild(noteItem);
    });
  }

  function addNote() {
    const noteText = noteInput.textContent.trim().replace(/\n/g, " ");
    if (noteText !== "") {
      notes.push(noteText);
      noteInput.textContent = ""; // clear the div content after adding the note
      updateLocalStorage();
      renderNotes();
    } else {
      alert("Input must not be empty!");
      throw new Error("Input must not be empty!");
    }
  }

  function editNote(index) {
    const noteText = notes[index];
    noteInput.textContent = noteText;

    noteInput.focus();

    function handleKeyPress(e) {
      if (e.key === "Enter") {
        const newNote = noteInput.textContent.trim().replace(/\n/g, " "); // Handle multi-line input
        if (newNote !== "") {
          notes[index] = newNote;
          updateLocalStorage();
          renderNotes();
        }
        noteInput.removeEventListener("keypress", handleKeyPress); // Remove event listener after editing
        noteInput.textContent = ""; // clear the div content after editing the note
      }
    }

    noteInput.addEventListener("keypress", handleKeyPress);
  }

  function deleteNote(index) {
    notes.splice(index, 1);
    updateLocalStorage();
    renderNotes();
  }

  function updateLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  addNoteBtn.addEventListener("click", addNote);
  addNoteItem.addEventListener("click", () => {
    notes.push("");
    updateLocalStorage();
    renderNotes();
  });

  addNoteBtn.addEventListener("click", function () {
    addNote();
  });

  renderNotes();
});
