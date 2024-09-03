export function main () {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    
    const topSection = document.createElement('hr');
    const bottomSection = document.createElement('hr');

    const heading = document.createElement('h1');
    heading.textContent = "Transit Schedules";
    
    const mainSection = document.createElement('section');
    mainSection.append(heading);
    mainContainer.append(topSection, mainSection, bottomSection);

    return mainContainer;
}