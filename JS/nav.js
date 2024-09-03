export function navBar() {
    console.log('nav');
    const navContainer = document.createElement('nav');

    navContainer.innerText = 'Nav Placeholder';
    navContainer.classList.add('nav-container');

    return navContainer;
}