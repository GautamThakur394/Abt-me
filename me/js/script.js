// js/script.js

// 1. Loader removal
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if(loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// 2. Mobile Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        // Animate hamburger lines
        hamburger.classList.toggle('toggle');
    });
}

// 3. Typewriter Effect for index.html
const typewriterElement = document.getElementById('typewriter');
if (typewriterElement) {
    const textToType = "Why use it… when you can create it?";
    let index = 0;
    
    function typeWriter() {
        if (index < textToType.length) {
            typewriterElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Speed of typing
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 1000);
}

// 4. Scroll Fade-In Animation (Intersection Observer)
const fadeElements = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});

// If the element is already in viewport on load, make it visible
window.addEventListener('DOMContentLoaded', () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});