'use strict';

// ARRAY TO STORE THE FOOTER CONTENTS
const footerContent = [
    {text : ''},
    {svg : ['./assets/svg/youtube.svg', './assets/svg/gitlab.svg', './assets/svg/github.svg', './assets/svg/notion.svg']},
    {link : ['youtube', 'https://git.clp.kr/anbschool/2nd/luck/hun-vadhna-samedy/personal_diary_project.git', 'https://github.com/SamedyHUNX/crud-application', 'https://www.notion.so/DIARY-CRUD-APPLICATION-a048d7eb84e24e899e07d7bd609f5219']}
]

// dynamically create element and add based on the array
const footerContainer = document.querySelector('.footer-container');
const footerTextDiv = footerContainer.querySelector('.footer-text');
const footerLogosDiv = footerContainer.querySelector('.footer-logos');
footerLogosDiv.classList.add('right');


const p = document.createElement('p');
p.textContent = footerContent[0].text;
footerTextDiv.appendChild(p)

footerContent[1].svg.forEach((svgPath, index) => {
    const a = document.createElement('a');
    const img = document.createElement('img');
    img.src = svgPath;

    // add link (href) from the footerContent array
    if (footerContent[2] && footerContent[2].link[index]) {
        a.href = footerContent[2].link[index];
        a.target = '_blank';
    }

    a.appendChild(img);
    footerLogosDiv.appendChild(a);
});
// MARKING THE END