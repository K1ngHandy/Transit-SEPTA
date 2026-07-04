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

	const pdfSection = pdfViewer(
		'https://www.septa.org/wp-content/uploads/page/communication/Regional-Rail-Rail-Transit-Line-Map_JUNE26.pdf',
		{ title: 'Regional Rail Map' },
	);

	main.append(heading, topSection, pdfSection, bottomSection);

	return main;
}
