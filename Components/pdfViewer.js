export function pdfViewer(pdfUrl, opts = {}) {
	const { title = 'PDF Viewer', collapsedByDefault = true } = opts;
	const section = document.createElement('section');
	section.className = 'my-4';

	section.innerHTML = `
    <div class="max-w-[1100px] mx-auto px-4">
      <div class="flex items-start gap-4">
        <div class="w-16 md:w-56 bg-white border rounded-md shadow-sm overflow-hidden" data-pdf-sidebar>
          <button data-pdf-toggle class="w-full bg-[#144b88] text-white py-2 text-left px-3" aria-expanded="false">☰</button>
          <div data-pdf-sidebar-content class="p-3 hidden md:block">
            <div class="mb-2 font-medium">Tools</div>
            <div class="flex gap-2 flex-wrap">
              <button data-action="zoom-out" class="px-2 py-1 border rounded">-</button>
              <button data-action="zoom-in" class="px-2 py-1 border rounded">+</button>
              <button data-action="fit" class="px-2 py-1 border rounded">Fit</button>
              <button data-action="enlarge" class="px-2 py-1 border rounded">Enlarge</button>
            </div>
          </div>
        </div>

		    <div class="flex-1">
          <div class="flex justify-between items-center mb-2">
		        <h2 class="m-0 text-lg text-[#144b88]">${title}</h2>
            <a href="${pdfUrl}" target="_blank" rel="noopener noreferrer" class="text-sm text-[#f14728] no-underline ml-2">Open full PDF</a>
          </div>
          <div class="w-full h-[650px] border border-gray-200 rounded-md overflow-auto relative">
            <iframe data-pdf-iframe src="${pdfUrl}" class="w-full h-full border-0 origin-top-left" loading="lazy" title="Regional Rail Map"></iframe>
            <button data-pdf-overlay class="absolute inset-0 w-full h-full opacity-0" aria-label="Open enlarged PDF view"></button>
          </div>
        </div>
      </div>
    </div>`;

	// Elements
	const sidebar = section.querySelector('[data-pdf-sidebar]');
	const toggle = section.querySelector('[data-pdf-toggle]');
	const sidebarContent = section.querySelector('[data-pdf-sidebar-content]');
	const iframe = section.querySelector('[data-pdf-iframe]');
	const overlay = section.querySelector('[data-pdf-overlay]');

	let scale = 1;

	function setCollapsed(collapsed) {
		if (collapsed) {
			sidebar.classList.remove('w-56');
			sidebar.classList.add('w-16');
			sidebarContent.classList.add('hidden');
			toggle.setAttribute('aria-expanded', 'false');
		} else {
			sidebar.classList.remove('w-16');
			sidebar.classList.add('w-56');
			sidebarContent.classList.remove('hidden');
			toggle.setAttribute('aria-expanded', 'true');
		}
	}

	setCollapsed(collapsedByDefault);

	toggle.addEventListener('click', () =>
		setCollapsed(toggle.getAttribute('aria-expanded') === 'true'),
	);

	section.addEventListener('click', (e) => {
		const action = e.target?.dataset?.action;
		if (!action) return;
		switch (action) {
			case 'zoom-in':
				scale = Math.min(3, scale * 1.2);
				iframe.style.transform = `scale(${scale})`;
				break;
			case 'zoom-out':
				scale = Math.max(0.5, scale / 1.2);
				iframe.style.transform = `scale(${scale})`;
				break;
			case 'fit':
				scale = 1;
				iframe.style.transform = `scale(${scale})`;
				break;
			case 'enlarge':
				openModal();
				break;
		}
	});

	overlay.addEventListener('click', openModal);

	function openModal() {
		const modal = document.createElement('div');
		modal.className =
			'fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4';
		modal.innerHTML = `
      <div class="bg-white w-full max-w-5xl h-[90vh] rounded-md overflow-hidden relative">
        <div class="flex items-center justify-between p-2 border-b">
          <div class="flex items-center gap-2">
            <button data-modal-zoom-out class="px-2 py-1 border rounded">-</button>
            <button data-modal-zoom-in class="px-2 py-1 border rounded">+</button>
            <button data-modal-fit class="px-2 py-1 border rounded">Fit</button>
          </div>
          <div>
            <button data-modal-minimize class="px-3 py-1 bg-[#144b88] text-white rounded">Minimize</button>
            <button data-modal-close class="px-3 py-1 ml-2 border rounded">Close</button>
          </div>
        </div>
        <div class="w-full h-[calc(100%_-_48px)] bg-gray-50">
          <iframe data-modal-iframe src="${pdfUrl}" class="w-full h-full border-0 origin-top-left" loading="lazy"></iframe>
        </div>
      </div>`;

		document.body.appendChild(modal);

		const modalIframe = modal.querySelector('[data-modal-iframe]');
		let modalScale = 1;

		modal
			.querySelector('[data-modal-zoom-in]')
			.addEventListener('click', () => {
				modalScale = Math.min(3, modalScale * 1.2);
				modalIframe.style.transform = `scale(${modalScale})`;
			});
		modal
			.querySelector('[data-modal-zoom-out]')
			.addEventListener('click', () => {
				modalScale = Math.max(0.5, modalScale / 1.2);
				modalIframe.style.transform = `scale(${modalScale})`;
			});
		modal
			.querySelector('[data-modal-fit]')
			.addEventListener('click', () => {
				modalScale = 1;
				modalIframe.style.transform = `scale(${modalScale})`;
			});

		modal
			.querySelector('[data-modal-minimize]')
			.addEventListener('click', () => {
				modal.remove();
			});
		modal
			.querySelector('[data-modal-close]')
			.addEventListener('click', () => {
				modal.remove();
			});
	}

	return section;
}
