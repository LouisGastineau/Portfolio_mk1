// ===========================
// Initialize all functionality when DOM is loaded
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initMouseLight();
    initMobileMenu();
    initActiveNavLink();
    initContactForm();
    initSmoothScroll();
    initScrollAnimations();
    initDownloadCVButton();
    initUwuMode();
});

// ===========================
// Mouse-follow light effect
// ===========================

function initMouseLight() {
    // Create mouse light element
    const mouseLight = document.createElement('div');
    mouseLight.id = 'mouse-light';
    document.body.appendChild(mouseLight);

    let mouseX = 0;
    let mouseY = 0;
    let lightX = 0;
    let lightY = 0;
    const speed = 0.15; // Smooth following speed

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseLight.style.opacity = '1';
    });

    // Hide light when mouse leaves window
    document.addEventListener('mouseleave', () => {
        mouseLight.style.opacity = '0';
    });

    // Smooth animation loop
    function animate() {
        // Calculate distance and interpolate
        const distX = mouseX - lightX;
        const distY = mouseY - lightY;
        
        lightX += distX * speed;
        lightY += distY * speed;
        
        // Update light position
        mouseLight.style.left = `${lightX}px`;
        mouseLight.style.top = `${lightY}px`;
        
        requestAnimationFrame(animate);
    }

    animate();
}

// ===========================
// Mobile Navigation Toggle
// ===========================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle) return;

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate menu icon
        const spans = menuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ===========================
// Active Navigation Link
// ===========================

function initActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (href === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        }
    });
}

// ===========================
// Contact Form Handler
// ===========================

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', formData);
        
        // Show success message with better UX
        showNotification('Merci pour votre message ! Je vous répondrai bientôt.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// ===========================
// Notification System
// ===========================

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    
    // Set background color based on type
    let backgroundColor;
    switch(type) {
        case 'success':
            backgroundColor = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
            break;
        case 'error':
            backgroundColor = 'linear-gradient(135deg, #ef4444, #dc2626)';
            break;
        case 'info':
            backgroundColor = 'linear-gradient(135deg, #3b82f6, #2563eb)';
            break;
        default:
            backgroundColor = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
    }
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${backgroundColor};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===========================
// Smooth Scroll for Anchor Links
// ===========================

function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Don't prevent default for empty anchors
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================
// Scroll Animation Observer
// ===========================

function initScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and grid items
    const animatedElements = document.querySelectorAll('.card, .gallery-item, .cv-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===========================
// Download CV Button Handler
// ===========================

function initDownloadCVButton() {
    const downloadBtn = document.getElementById('download-cv-btn');
    
    if (!downloadBtn) return;

    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('Fonctionnalité de téléchargement à implémenter', 'info');
    });
}

// ===========================
// UwU Mode Easter Egg
// ===========================

let uwuModeActive = false;
const originalTexts = new Map();

function initUwuMode() {
    const uwuTrigger = document.getElementById('uwu-trigger');
    
    if (!uwuTrigger) return;

    uwuTrigger.addEventListener('click', () => {
        uwuModeActive = !uwuModeActive;
        
        if (uwuModeActive) {
            activateUwuMode();
            showNotification('UwU mode activé ! >w<', 'info');
        } else {
            deactivateUwuMode();
            showNotification('Mode normal restauré', 'info');
        }
    });
}

function activateUwuMode() {
    // Get all text nodes in the document
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                // Skip script and style tags
                if (node.parentElement.tagName === 'SCRIPT' || 
                    node.parentElement.tagName === 'STYLE') {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );

    const textNodes = [];
    let currentNode;
    
    while ((currentNode = walker.nextNode()) !== null) {
        if (currentNode.nodeValue.trim().length > 0) {
            textNodes.push(currentNode);
        }
    }

    // Replace 'r' and 'R' with 'w' and 'W'
    textNodes.forEach(node => {
        const originalText = node.nodeValue;
        originalTexts.set(node, originalText);
        
        const uwuText = originalText
            .replace(/r/g, 'w')
            .replace(/R/g, 'W')
            .replace(/l/g, 'w')
            .replace(/L/g, 'W');
        
        node.nodeValue = uwuText;
    });
}

function deactivateUwuMode() {
    // Restore original texts
    originalTexts.forEach((originalText, node) => {
        if (node.parentElement) {
            node.nodeValue = originalText;
        }
    });
    
    originalTexts.clear();
}
