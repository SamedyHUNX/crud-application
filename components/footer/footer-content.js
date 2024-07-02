'use strict';

const footerContent = [
    {text : 'HI'},
    {svg : ['./assets/svg/youtube.svg', './assets/svg/gitlab.svg', './assets/svg/github.svg']},
]

const footerContainer = document.querySelector('.footer-container');
const footerTextDiv = footerContainer.querySelector('.footer-text');
const footerLogosDiv = footerContainer.querySelector('.footer-logos');
footerLogosDiv.classList.add('right');


footerTextDiv.textContent = footerContent[0].text;

footerContent[1].svg.forEach(svgPath => {
    const img = document.createElement('img');
    img.src = svgPath;
    footerLogosDiv.appendChild(img);
})