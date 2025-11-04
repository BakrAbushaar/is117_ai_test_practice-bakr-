// DOM Elements
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const searchToggle = document.querySelector('.search-toggle');
const featureCards = document.querySelectorAll('.feature-card');
const productCards = document.querySelectorAll('.product-card');

// Navigation Toggle
let isNavOpen = false;

navToggle.addEventListener('click', () => {
    isNavOpen = !isNavOpen;
    navToggle.setAttribute('aria-expanded', isNavOpen);
    primaryNav.classList.toggle('active');
    
    // Trap focus within nav when open
    if (isNavOpen) {
        trapFocus(primaryNav);
    }
});

// Focus Trap
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
        
        if (e.key === 'Escape') {
            isNavOpen = false;
            navToggle.setAttribute('aria-expanded', false);
            primaryNav.classList.remove('active');
            navToggle.focus();
        }
    });
}

// Intersection Observer for reveal animations
const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px'
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature and product cards
[...featureCards, ...productCards].forEach(card => {
    card.classList.add('reveal');
    revealOnScroll.observe(card);
});

// Product Navigation
const productNav = document.querySelector('.product-nav');
const productGrid = document.querySelector('.product-grid');

if (productNav && productGrid) {
    const prevBtn = productNav.querySelector('.prev');
    const nextBtn = productNav.querySelector('.next');
    
    // Simple carousel navigation
    let scrollAmount = 0;
    const cardWidth = 300; // matches min-width in CSS
    
    prevBtn.addEventListener('click', () => {
        scrollAmount = Math.max(scrollAmount - cardWidth, 0);
        productGrid.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', () => {
        scrollAmount = Math.min(
            scrollAmount + cardWidth,
            productGrid.scrollWidth - productGrid.clientWidth
        );
        productGrid.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Keyboard navigation for product grid
    productGrid.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextBtn.click();
        }
    });
}

// Data Visualization Animation
const dataViz = document.querySelector('.data-viz');
if (dataViz) {
    // Simple animated line drawing
    const dataLine = dataViz.querySelector('.data-line');
    dataLine.style.strokeDasharray = dataLine.getTotalLength();
    dataLine.style.strokeDashoffset = dataLine.getTotalLength();
    
    const animateLine = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                dataLine.style.transition = 'stroke-dashoffset 2s ease-out';
                dataLine.style.strokeDashoffset = '0';
            }
        });
    });
    
    animateLine.observe(dataViz);
}

// Progressive Image Loading
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        console.log('Native lazy loading supported');
    } else {
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
});