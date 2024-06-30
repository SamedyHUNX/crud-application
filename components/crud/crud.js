"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const noteInput = document.querySelector("#note-input"); //one time used
  const addNoteBtn = [...document.getElementsByClassName("custom-button")][0];
  const notesList = [...document.getElementsByClassName("notes-list")][0];
  const addNoteItem = [
    ...document.getElementsByClassName("header-container"),
  ][0].lastElementChild;

  // Load notes from local storage
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  function renderNotes() {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
      const noteItem = document.createElement("li");

      const noteText = document.createElement("span");
      noteText.textContent = note;
      noteItem.appendChild(noteText);

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => editNote(index));
      noteItem.appendChild(editBtn);

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
      noteInput.textContent = ""; // Clear the div content after adding the note
      updateLocalStorage();
      renderNotes();
    } else {
      alert("Input must not be empty.");
    }
  }

  function editNote(index) {
    const noteText = notes[index];
    noteInput.textContent = noteText; // Set the div content to the note text

    // Optional: Focus on the div to facilitate editing
    noteInput.focus();

    // Update note when user presses Enter
    noteInput.addEventListener("keypress", function handleKeyPress(e) {
      if (e.key === "Enter") {
        const newNote = noteInput.textContent.trim().replace(/\n/g, " "); // Handle multi-line input if needed
        if (newNote !== "") {
          notes[index] = newNote;
          updateLocalStorage();
          renderNotes();
        }
        noteInput.removeEventListener("keypress", handleKeyPress); // Remove event listener after editing
      }
    });
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
  noteInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addNote();
    }
  });

  addNoteBtn.addEventListener("click", function () {
    addNote();
  });

  addNoteItem.addEventListener("click", () => {
    notes.push("");
    updateLocalStorage();
    renderNotes();
  });

  renderNotes();
});
