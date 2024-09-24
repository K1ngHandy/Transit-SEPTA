export function footer(selector) {
    const footer = document.querySelector(selector);

    const address = document.createElement('address');
    const year = new Date().getFullYear();
    address.innerHTML = `&copy; K1ngHandy ${year}`;

    footer.append(address);

    return footer;
}