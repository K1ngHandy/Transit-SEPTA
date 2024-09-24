import { navItems } from "../Data/nav-items.js";

export function nav(selector) {
    const nav = document.querySelector(selector);

    const heading = document.createElement('h2');
    heading.textContent = "SEPTA";

    const menuToggle = document.createElement('div');
    menuToggle.innerHTML = '&#9776;';
    menuToggle.classList.add('menu-toggle');
    menuToggle.setAttribute('title', 'Menu');

    menuToggle.addEventListener('click', (event) => {
        if (event) {
            navList.classList.toggle('active')
        };
    });

    const navList = document.createElement('ul');
    navList.classList.add('nav-list');

    navItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');
        listItem.setAttribute('title', item.title);

        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.title;

        listItem.appendChild(link);
        navList.appendChild(listItem);
    })

    nav.append(heading, menuToggle, navList);

    return nav;
}