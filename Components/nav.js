import { navItems } from '../Data/nav-items.js';

export function nav(selector) {
	const nav = document.querySelector(selector);

	// Apply Tailwind utility classes to the nav root
	nav.classList.add(
		'flex',
		'items-center',
		'justify-start',
		'gap-4',
		'px-4',
		'relative',
		'bg-[#144b88]',
		'text-white',
	);

	const menuToggle = document.createElement('button');
	menuToggle.type = 'button';
	menuToggle.innerHTML = '&#9776;';
	menuToggle.className =
		'inline-flex items-center justify-center border-0 bg-transparent text-white cursor-pointer p-2 scale-150';
	menuToggle.setAttribute('aria-label', 'Menu');
	menuToggle.setAttribute('aria-expanded', 'false');

	const logo = document.createElement('img');
	logo.src = 'assets/images/logo/septa-2026.svg';
	logo.alt = 'SEPTA 2026 logo';
	logo.className = 'max-w-[120px] h-auto';

	menuToggle.addEventListener('click', (event) => {
		if (!event) return;
		// Toggle visibility for small screens (Tailwind 'hidden')
		navList.classList.toggle('hidden');
		const isExpanded = !navList.classList.contains('hidden');
		menuToggle.setAttribute('aria-expanded', String(isExpanded));
	});

	const navList = document.createElement('ul');
	// hidden by default on small screens, becomes flex on md and up
	navList.className = 'hidden md:flex gap-3 ml-auto p-0 list-none';

	navItems.forEach((item) => {
		const listItem = document.createElement('li');
		listItem.className = 'text-center px-2';
		listItem.setAttribute('title', item.title);

		const link = document.createElement('a');
		link.href = item.href;
		link.textContent = item.title;
		link.className = 'text-sm text-white no-underline hover:text-[#f14728]';

		listItem.appendChild(link);
		navList.appendChild(listItem);
	});

	nav.append(menuToggle, logo, navList);

	return nav;
}
