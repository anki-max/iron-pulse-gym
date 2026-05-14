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



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
}