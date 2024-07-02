"use strict";

const rightSection = document.querySelector('right-section');

rightSection.classList.add('.right-section');

// NAVBAR ELEMENT
const navBarElementLeft = [
  { logo: "./assets/svg/toggle.svg", class: "homepage" },
  { logo: "./assets/svg/america.svg", class: "right" },
  { logo: "./assets/svg/german.svg", class: "right" },
  { logo: "./assets/svg/cambodian.svg", class: "right" },
  { logo: "./assets/svg/thai.svg", class: "right" },
];

// BUTTON ARRAY
const buttonArray = [{ text: "Enter Note", class: "custom-button" }];

// DYNAMICALLY ADDING OR REMOVING THE HIDDEN CLASS ON ASIDE ELEMENT
function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    asideElement.classList.add("hidden");
  } else {
    asideElement.classList.remove("hidden");
  }
}

// media query for that
const mediaQuery = window.matchMedia("(max-width: 920px)");

handleMediaQuery(mediaQuery);

mediaQuery.addEventListener("change", (e) => handleMediaQuery(e.mediaQuery));
// MARKING THE END
