import { navBar } from './JS/nav.js';
import { main } from './JS/main.js';
import { footer } from './JS/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const navPlaceholder = document.querySelector('#nav-placeholder');
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    const mainPlaceholder = document.querySelector('#main-placeholder');

    navPlaceholder.appendChild(navBar());
    mainPlaceholder.appendChild(main());
    footerPlaceholder.appendChild(footer());
});
