"use strict";

const translations = [
  // english language
  {
      title: 'Dairy Application',
      placeholder: 'Give your note a Title',
      date: 'What day is it? (YYYY/MM/DD)',
      notePlaceHolder: 'Write down your thoughts and let your ideas flow...',
      enterNote: 'Enter Note',
      editButton: 'Edit',
      deleteButton: 'Delete',
      footerP: 'This simple CRUD application is written by: Vadhna Samedy Hun. You can contact him here 👉'
  },
  // deutsch sprache
  {
      title: 'Tagebuch Anwendung',
      placeholder: 'Titel',
      date: 'Datumsdaten bitte. (DD/MM/JJJJ)',
      notePlaceHolder: 'Schreiben Sie hier Ihre Notizen auf...',
      enterNote: 'Eingeben',
      editButton: 'Bearbeiten',
      deleteButton: 'Löschen',
      footerP: 'Diese einfache CRUD-Anwendung wurde geschrieben von: Vadhna Samedy Hun. Sie können ihn hier kontaktieren 👉'
  },
  // khmer language
  {
    title: 'កម្មវិធីកត់ត្រារបស់អ្នក',
    placeholder: 'ចំណងជើងរបស់អ្នក',
    date: 'កាលបរិច្ឆេទរបស់អ្នក',
    notePlaceHolder: 'អ្នកអាចសរសេរកំណត់ត្រារបស់អ្នកនៅទីនេះ...',
    enterNote: 'ចុចបញ្ចូល',
    editButton: 'កែសម្រួល',
    deleteButton: 'លុប',
    footerP: 'កម្មវិធី CRUD ដ៏សាមញ្ញនេះត្រូវបានសរសេរដោយ៖ Vadhna Samedy Hun។ អ្នកអាចទាក់ទងគាត់នៅទីនេះ 👉'
  },
  // thai language
  {
    title: 'จดโน๊ตของคุณ',
    placeholder: 'ชื่อบันทึกย่อของคุณ',
    date: 'วันที่ของบันทึกย่อของคุณ',
    notePlaceHolder: 'คุณสามารถเขียนบันทึกของคุณได้ที่นี่',
    enterNote: 'เอ็นเทอร์',
    editButton: 'แก้ไข',
    deleteButton: 'ลบ',
    footerP: 'แอปพลิเคชั่น CRUD ง่าย ๆ นี้เขียนโดย: Vadhna Samedy Hun คุณสามารถติดต่อเขาได้ที่นี่ 👉'
  }
];

let currentLanguageIndex = 0;

const flagArray = Array.from(document.querySelectorAll('.right img')); // the flags

flagArray.forEach((flag, index) => {
  flag.addEventListener('click', () => {
      currentLanguageIndex = index;
      updateTranslations(currentLanguageIndex);
      renderNotes();
  });
});

function updateTranslations(index) {
  // dynamically changing the title
  const diaryElement = document.querySelector('.header-container p');
  diaryElement.textContent = translations[index].title;

  // dynammically chaning the placeholder of input
  const placeholderTitle = document.querySelector('.input-container #title-input');
  placeholderTitle.setAttribute('placeholder', translations[index].placeholder);

  // dynamically changing the placeholder of the date input
  const placeholderDate = document.querySelector('.input-container #date-input');
  placeholderDate.setAttribute('placeholder', translations[index].date);

  // dynamically changing the placeholder of the note input
  const placeholderInput = document.querySelector('.input-container #note-input');
  placeholderInput.setAttribute('placeholder', translations[index].notePlaceHolder);

  // dynamically chaning the language of the lone button
  const enterNoteButton = document.querySelector('.custom-button a');
  enterNoteButton.textContent = translations[index].enterNote;

  // dynamically chaning the language of the text within the footeer
  const footerTextElement = document.querySelector('.footer-text p');
  footerTextElement.textContent = translations[index].footerP;
}

document.addEventListener("DOMContentLoaded", () => {
  const titleInput = document.querySelector('#title-input'); // title input
  const dateInput = document.querySelector('#date-input'); // date input
  const noteInput = document.querySelector("#note-input"); // note input
  const addNoteBtn = document.querySelector(".custom-button"); // add note button
  const notesList = document.querySelector(".notes-list"); // notes list container
  const addNoteItem = document.querySelector('.header-container').lastElementChild.firstElementChild;
  const homePageItem = document.querySelector('img.homepage');

  // load notes from local storage
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  function renderNotes() {
      notesList.innerHTML = "";

      notes.forEach((note, index) => {
          // create a li store store note item
          const noteItem = document.createElement("li");

      // create a h3 element to store the title
      const noteTitle = document.createElement("h3");
      noteTitle.textContent = note.title;
      noteItem.appendChild(noteTitle);

          // create a p element to store the date
          const noteDate = document.createElement("p");
          noteDate.textContent = note.date;
          noteItem.appendChild(noteDate);

          // create a p element to store the note
          const noteText = document.createElement("p");
          noteText.textContent = note.text;
          noteItem.appendChild(noteText);

          // create div to store the notes
          const noteContainer = document.createElement('div');
          noteContainer.classList.add('note-container');
          noteContainer.append(noteItem)

          // button container
          const buttonContainer = document.createElement("div");
          buttonContainer.classList.add("buttonContainer");
          // common button (edit)
          const editBtn = document.createElement("button");
          editBtn.textContent = translations[currentLanguageIndex].editButton;
          editBtn.addEventListener("click", () => editNote(index));
          editBtn.classList.add("custom-button");
          buttonContainer.appendChild(editBtn);

          // common button (delete)
          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = translations[currentLanguageIndex].deleteButton;
          deleteBtn.addEventListener("click", () => deleteNote(index));
          deleteBtn.classList.add("custom-button");
          buttonContainer.appendChild(deleteBtn);

          noteContainer.append(buttonContainer);

          // append the note item to the list
          notesList.appendChild(noteContainer);
      });
  }

  // function to add note
  function addNote() {
      const titleText = titleInput.value.trim().replace(/\n/g, " ");
      const dateText = dateInput.value.trim().replace(/\n/g, " ");
      const noteText = noteInput.value.trim().replace(/\n/g, " ");

      if (titleText && dateText && noteText) {
          const newNote = {
              title: titleText,
              date: dateText,
              text: noteText
          };

          notes.push(newNote);
          titleInput.value = "";
          dateInput.value = "";
          noteInput.value = "";
          updateLocalStorage();
          renderNotes();
      } else {
          alert("All input fields must not be empty!");
      }
  }

  // function to add an empty note
  function addEmptyNote() {
      const newNote = {
          title: "",
          date: "",
          text: ""
      };

      notes.push(newNote);
      updateLocalStorage();
      renderNotes();
  }

  // function to edit notes
  function editNote(index) {
      const note = notes[index];
      titleInput.value = note.title;
      dateInput.value = note.date;
      noteInput.value = note.text;

      notes.splice(index, 1);
      updateLocalStorage();
      renderNotes();
  }

  // function to delete notes
  function deleteNote(index) {
      notes.splice(index, 1);
      updateLocalStorage();
      renderNotes();
  }

  // function to update the local storage
  function updateLocalStorage() {
      localStorage.setItem("notes", JSON.stringify(notes));
  }

  addNoteBtn.addEventListener("click", addNote);

  // when user clicks on enter the note is also added
  [titleInput, dateInput, noteInput].forEach(input => {
      input.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
              event.preventDefault();
              addNote();
          }
      });
  });

  addNoteItem.addEventListener("click", addEmptyNote);

  renderNotes();
  updateTranslations(currentLanguageIndex);

  // when user click on the toggle button the aside menu appears
  homePageItem.addEventListener('click', () => {
    asideElement.classList.toggle('hidden');
  })
});


