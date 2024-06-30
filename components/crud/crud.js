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
    notesList.innerHTML = ""; // Clear the existing list before rendering

    notes.forEach((note, index) => {
      const noteItem = document.createElement("li");

      const noteText = document.createElement("span");
      noteText.textContent = note;
      noteItem.appendChild(noteText);

      // Create a div container for buttons
      const buttonContainer = document.createElement("div");

      // Edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => editNote(index));
      buttonContainer.appendChild(editBtn);

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => deleteNote(index));
      buttonContainer.appendChild(deleteBtn);

      buttonContainer.classList.add("btn-wrapper");

      noteItem.appendChild(buttonContainer); // Append button container to the note item

      notesList.appendChild(noteItem); // Append note item to the list
    });
  }

  function addNote() {
    const noteText = noteInput.textContent.trim().replace(/\n/g, " ");
    if (noteText) {
      notes.push(noteText);
      noteInput.textContent = ""; // Clear the div content after adding the note
      updateLocalStorage();
      renderNotes();
    } else if (noteText === "") {
      alert("Input must not be empty!");
    }
  }

  function editNote(index) {
    const noteText = notes[index];
    noteInput.textContent = noteText;

    function handleKeyPress(e) {
      if (e.key === "Enter") {
        const newNote = noteInput.textContent.trim().replace(/\n/g, " "); // Handle multi-line input
        if (newNote !== "") {
          notes[index] = newNote;
          updateLocalStorage();
          renderNotes();
        }
        if (newNote === notes[index]) {
          notes.splice(index, 1);
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

  // adding note when user press Enter, but not in edit mode
  function isEditMode() {
    return false;
  }
  noteInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      if (!isEditMode()) {
        addNote();
      }
    }
  });

  // add the li when user press on the enter note button..
  addNoteBtn.addEventListener("click", addNote);

  renderNotes();
});
