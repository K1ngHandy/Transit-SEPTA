import { navItems } from '../Data/nav-items.js';
import { pdfViewer } from './pdfViewer.js';

export function main(selector) {
	const main = document.querySelector(selector);

	// Apply Tailwind utility classes to main container
	main.classList.add('text-[#144b88]', 'text-center', 'px-4');

	const heading = document.createElement('h1');
	heading.className = 'text-2xl font-semibold my-4';
	const currentPage = navItems.find((item) =>
		globalThis.location.pathname.includes(item.href),
	);
	heading.textContent = currentPage?.title ?? '';

	const topSection = document.createElement('hr');
	topSection.className = 'border-t border-[#f14728] max-w-[81%] mx-auto';
	const bottomSection = document.createElement('hr');
	bottomSection.className = 'border-t border-[#f14728] max-w-[81%] mx-auto';

	const mainSection = document.createElement('section');
	mainSection.className = 'mb-4';
	mainSection.innerHTML = `
		<gmp-map center="40.08871841430664,-75.3934097290039" zoom="14" map-id="DEMO_MAP_ID">
			<gmp-advanced-marker position="40.08871841430664,-75.3934097290039" title="My location"></gmp-advanced-marker>
		</gmp-map>`;

	const pdfSection = pdfViewer(
		'https://www.septa.org/wp-content/uploads/page/communication/Regional-Rail-Rail-Transit-Line-Map_JUNE26.pdf',
		{ title: 'Regional Rail Map' },
	);

	main.append(heading, topSection, mainSection, pdfSection, bottomSection);

	return main;
}
