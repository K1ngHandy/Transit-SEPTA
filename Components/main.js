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

    async function trainView() {
        try {
            const response = await fetch('https://overpass-api.de/api/interpreter');
            if (!response.ok) {
                throw new Error(`Error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

            // data.forEach(train => {
            //     const trainInfo = document.createElement('p');
            //     trainInfo.textContent = `Train #${train.trainno}: ${train.status}`;
            //     mainSection.append(trainInfo);
            // })
        } catch (error) {
            console.error('Error fetching train data:', error);
        }
    }
    trainView();

    return mainContainer;
}