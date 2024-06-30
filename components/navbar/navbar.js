"use strict";

// NAVBAR
(function () {
  const nav = document.querySelector("nav");

  // Create two div elements for homepage and right
  const homepageDiv = document.createElement("div");
  homepageDiv.classList.add("homepage");

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right");

  // Loop through navBarElementLeft array
  for (let idx = 0; idx < navBarElementLeft.length; idx++) {
    const { logo, class: imgClass } = navBarElementLeft[idx];
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", logo);
    imgElement.classList.add(imgClass);

    if (imgClass === "homepage") {
      const aElement = document.createElement("a");
      aElement.setAttribute("href", "./index.html");
      imgElement.appendChild(aElement);
      homepageDiv.appendChild(imgElement);
    } else if (imgClass === "right") {
      rightDiv.appendChild(imgElement);
    }
  }

  // append both div elements to the nav
  nav.appendChild(homepageDiv);
  nav.appendChild(rightDiv);
})();

// const toggleButton = document.querySelector(".homepage img");

// toggleButton.addEventListener("click", () => {
//   asideElement.classList.toggle("hidden");
// });

// MARKING THE END THE NAVBAR COMPONENT CREATION
