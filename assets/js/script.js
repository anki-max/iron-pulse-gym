// Change navbar background when scrolling
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (!nav) return;

    if (window.scrollY > 50) {
        nav.style.background = '#000'; // Solid black on scroll
    } else {
        nav.style.background = 'rgba(0,0,0,0.8)'; // Transparent at top
    }
});
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (link.classList.contains('dropdown-toggle') && window.matchMedia('(max-width: 768px)').matches) {
                return;
            }

            navLinks.classList.remove('active');
            dropdown?.classList.remove('open');
            dropdownToggle?.setAttribute('aria-expanded', 'false');
        });
    });
}

if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener('click', (event) => {
        if (!window.matchMedia('(max-width: 768px)').matches) return;

        event.preventDefault();
        const isOpen = dropdown.classList.toggle('open');
        dropdownToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.querySelector('.hero-video');
    if (!heroVideo) return;

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const reducedData = window.matchMedia('(prefers-reduced-data: reduce)').matches;
    const saveData = (connection && connection.saveData) || reducedData;

    if (saveData) {
        heroVideo.removeAttribute('autoplay');
        heroVideo.pause();
        return;
    }

    heroVideo.querySelectorAll('source[data-src]').forEach((source) => {
        source.src = source.dataset.src;
    });

    heroVideo.load();
    heroVideo.play().catch(() => {
        heroVideo.pause();
    });
});

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery img').forEach((image) => {
        const preload = new Image();
        preload.src = image.currentSrc || image.src;
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const flowItems = document.querySelectorAll('h1, h2, h3, h4, p, li, .btn, .join-btn, .back-to-top');

    flowItems.forEach((item, index) => {
        item.classList.add('text-flow');
        item.style.setProperty('--flow-delay', `${Math.min(index * 55, 1300)}ms`);
    });

    requestAnimationFrame(() => {
        flowItems.forEach((item) => item.classList.add('is-visible'));
    });
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
    if (!slides.length) return;
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
}
