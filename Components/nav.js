export function navBar() {
    const navContainer = document.createElement('nav');
    navContainer.classList.add('nav-container');

    const heading = document.createElement('h2');
    heading.textContent = "SEPTA";

    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.id = 'mobile-menu';
    menuToggle.setAttribute('title', 'Menu');

    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('span');
        bar.classList.add('bar');
        menuToggle.appendChild(bar);
    }

    const navList = document.createElement('ul');
    navList.classList.add('nav-list');

    const navItems = [
        { text: 'Home', href: '/index.html' },
        { text: 'Realtime', href: '/Pages/realtime.html' },
        { text: 'Schedules', href: '/Pages/schedules.html' }
    ]

    navItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');
        listItem.setAttribute('title', item.text);

        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.text;

        listItem.appendChild(link);
        navList.appendChild(listItem);
    })

    navContainer.append(menuToggle, heading, navList);

    return navContainer;
}