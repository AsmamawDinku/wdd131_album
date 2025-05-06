// Hamburger Menu Functionality
const menuButton = document.getElementById('menu-button');
const primaryNav = document.getElementById('primary-nav');

menuButton.addEventListener('click', () => {
    primaryNav.classList.toggle('show');
    menuButton.textContent = primaryNav.classList.contains('show') ? '✕' : '☰';
});

// Footer Dates
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;