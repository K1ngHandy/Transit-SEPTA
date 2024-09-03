export function footer() {
    const footerContainer = document.createElement('section');
    footerContainer.classList.add('footer-container');

    const footerTitle = document.createElement('h4');
    footerTitle.innerText = 'Footer Placeholder';

    const address = document.createElement('address');
    const year = new Date().getFullYear();
    address.innerHTML = `K1ngHandy ${year}`;

    footerContainer.append(footerTitle, address);

    return footerContainer;
}