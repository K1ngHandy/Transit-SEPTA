import { navItems } from '../Data/nav-items.js';

export function nav(selector) {
	const nav = document.querySelector(selector);

	const menuToggle = document.createElement('button');
	menuToggle.type = 'button';
	menuToggle.innerHTML = '&#9776;';
	menuToggle.classList.add('menu-toggle');
	menuToggle.setAttribute('aria-label', 'Menu');
	menuToggle.setAttribute('aria-expanded', 'false');

	const heading = document.createElement('h2');
	heading.textContent = 'SEPTA';

	menuToggle.addEventListener('click', (event) => {
		if (!event) {
			return;
		}

		const isExpanded = navList.classList.toggle('active');
		menuToggle.setAttribute('aria-expanded', String(isExpanded));
	});

	const navList = document.createElement('ul');
	navList.classList.add('nav-list');

	navItems.forEach((item) => {
		const listItem = document.createElement('li');
		listItem.classList.add('nav-item');
		listItem.setAttribute('title', item.title);

		const link = document.createElement('a');
		link.href = item.href;
		link.textContent = item.title;

		listItem.appendChild(link);
		navList.appendChild(listItem);
	});

	nav.append(menuToggle, heading, navList);

	return nav;
}
