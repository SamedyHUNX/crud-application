'use strict';

const translations = [
    {
        title: 'Dairy Application',
        placeholder: 'Give you note a Title',
        date: 'What day is it?',
        notePlaceHolder: 'Write down your thoughts and let your ideas flow...',
        enterNote: 'Enter Note',
        editButton: 'Edit',
        deleteButton: 'Delete',
    },

    {
        title: 'Tagebuch Anwendung',
        placeholder: 'Titel',
        date: 'Datumsdaten',
        notePlaceHolder: 'Schreiben Sie hier Ihre Notizen auf',
        enterNote: 'Eingeben',
        editButton: 'Bearbeiten',
        deleteButton: 'Löschen',
    }
]

let currentLanguageIndex = 0;

const flagArray = Array.from(document.querySelectorAll('.right img'));

flagArray.forEach((flag, index) => {
    flag.addEventListener('click', () => {
        currentLanguageIndex = index;
        updateTranslations(currentLanguageIndex);
    });
});


function updateTranslations(index) {
    const diaryElement = document.querySelector('.header-container p');
    diaryElement.textContent = translations[index].title;

    const placeholderTitle = document.querySelector('.input-container #title-input');
    placeholderTitle.setAttribute('placeholder', translations[index].placeholder);

    const placeholderDate = document.querySelector('.input-container #date-input');
    placeholderDate.setAttribute('placeholder', translations[index].date);

    const placeholderInput = document.querySelector('.input-container #note-input');
    placeholderInput.setAttribute('placeholder', translations[index].notePlaceHolder);

    const enterNoteButton = document.querySelector('.custom-button a');
    enterNoteButton.textContent = translations[index].enterNote;

    const editButtion = document.querySelector('.buttonContainer').firstElementChild;
    editButtion.textContent = translations[index].editButton;

    const deleteButton = document.querySelector('.buttonContainer').lastElementChild;
    deleteButton.textContent = translations[index].deleteButton;
}