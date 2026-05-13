// Change navbar background when scrolling
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#000'; // Solid black on scroll
    } else {
        nav.style.background = 'rgba(0,0,0,0.8)'; // Transparent at top
    }
});
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});