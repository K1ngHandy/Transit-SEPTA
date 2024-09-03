export function main () {
    console.log('main');
    // const mainPlaceholder = document.querySelector('.main-placeholder');
    const mainContainer = document.createElement('section');
    const heading = document.createElement('h1');
    heading.textContent = "SEPTA";
    heading.style.color = "blue";
    
    mainContainer.appendChild(heading);
    return mainContainer;
}