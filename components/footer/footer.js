'use strict';

// FOOTER INJECTION
const footer = document.querySelector('footer');

footer.innerHTML += `
    <div class='footer-container'>
        <div class="footer-text"></div>
        <div class="footer-logos"></div>
    </div>
`;
// MARKING THE END