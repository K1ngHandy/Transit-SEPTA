import { navItems } from '../Data/nav-items.js';

export function main(selector) {
	const main = document.querySelector(selector);

	const heading = document.createElement('h1');
	const currentPage = navItems.find((item) =>
		globalThis.location.pathname.includes(item.href),
	);
	heading.textContent = currentPage?.title ?? '';

	const topSection = document.createElement('hr');
	const bottomSection = document.createElement('hr');

	const mainSection = document.createElement('section');
	mainSection.innerHTML = `
        <gmp-map center="40.08871841430664,-75.3934097290039" zoom="14" map-id="DEMO_MAP_ID">
            <gmp-advanced-marker position="40.08871841430664,-75.3934097290039" title="My location"></gmp-advanced-marker>
        </gmp-map>`;
	main.append(heading, topSection, mainSection, bottomSection);

	return main;
}
