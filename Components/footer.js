export function footer(selector) {
	const footer = document.querySelector(selector);
	const baseUrl = 'https://github.com/';

	// Tailwind utilities for footer layout
	footer.classList.add(
		'bg-[#144b88]',
		'text-white',
		'flex',
		'justify-center',
		'py-2',
	);

	const address = document.createElement('address');
	const year = new Date().getFullYear();

	address.innerHTML = `coded by: <a href="${baseUrl}k1nghandy" target="_blank">K1ngHandy</a> ${year}`;
	address.className = 'not-italic';
	address.querySelector('a').className =
		'text-white hover:text-[#f14728] ml-1';

	footer.append(address);

	return footer;
}
