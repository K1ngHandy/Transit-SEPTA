import { navBar } from './Components/nav.js';
import { main } from './Components/main.js';
import { footer } from './Components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const navPlaceholder = document.querySelector('#nav-placeholder');
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    const mainPlaceholder = document.querySelector('#main-placeholder');

    navPlaceholder.append(navBar());
    mainPlaceholder.append(main());
    footerPlaceholder.append(footer());
});
