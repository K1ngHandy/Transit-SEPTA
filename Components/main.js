import { navItems } from "../Data/nav-items.js";
// require('dotenv').config();
// const url = process.env.URL;

export function main(selector) {
    const main = document.querySelector(selector);

    const heading = document.createElement('h1');
    // set heading
    navItems.forEach(item => {
        if (window.location.pathname.includes(item.href)) {
            heading.innerText = `${item.title}`;
        } else {
            console.log('Path null');
        }
    });
    
    const topSection = document.createElement('hr');
    const bottomSection = document.createElement('hr');
    
    const mainSection = document.createElement('section');
    mainSection.innerHTML = `
        <gmp-map center="40.08871841430664,-75.3934097290039" zoom="14" map-id="DEMO_MAP_ID">
            <gmp-advanced-marker position="40.08871841430664,-75.3934097290039" title="My location"></gmp-advanced-marker>
        </gmp-map>`;
    // mainSection.append(heading);
    main.append(heading, topSection, mainSection, bottomSection);

    // async function mapView() {
    //     try {
    //         const response = await fetch(url);
    //         if (!response.ok) {
    //             throw new Error(`Error! Status: ${response.status}`);
    //         }
    //         const data = await response.json();
    //         console.log(data);
    //     } catch (error) {
    //         console.error('Error fetching map data:', error);
    //     }
    // }
    // mapView();

    return main;
}