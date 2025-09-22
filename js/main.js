// main.js - Clinical Supplies Website Interactivity
// Author: PLP Academy Final Project

// Responsive Navigation Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-label', navLinks.classList.contains('open') ? 'Close menu' : 'Open menu');
  });
}

// Animated Hero Section (fade-in)
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(40px)';
    setTimeout(() => {
      hero.style.transition = 'opacity 1.2s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)';
      hero.style.opacity = 1;
      hero.style.transform = 'translateY(0)';
    }, 200);
  }
});


// Scroll-triggered Animations for Sections (including new sections)
function animateOnScroll() {
  const selectors = [
    'main section',
    '.product-card',
    '.testimonials',
    '.partners',
    '.faq',
    '.cta',
    '.about h2',
    '.contact-info',
    '.contact-info h3',
    '.faq dt',
    '.faq dd'
  ];
  const elements = document.querySelectorAll(selectors.join(','));
  const trigger = window.innerHeight * 0.85;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// FAQ Toggle (expand/collapse answers, animated)
document.querySelectorAll('.faq dt').forEach(dt => {
  dt.addEventListener('click', function() {
    const dd = this.nextElementSibling;
    if (dd && dd.tagName.toLowerCase() === 'dd') {
      const isOpen = dd.classList.toggle('open');
      dt.classList.toggle('open', isOpen);
    }
  });
  // Start collapsed
  const dd = dt.nextElementSibling;
  if (dd && dd.tagName.toLowerCase() === 'dd') {
    dd.classList.remove('open');
    dt.classList.remove('open');
  }
});

// Partner logo hover effect
document.querySelectorAll('.partner-logos img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
    img.style.boxShadow = '0 4px 16px rgba(43,187,173,0.18)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = '';
    img.style.boxShadow = '';
  });
});

// Contact Form Validation & Feedback
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    const msg = document.getElementById('form-message');
    let valid = true;
    let errorMsg = '';
    if (!name) {
      valid = false;
      errorMsg = 'Please enter your name.';
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      valid = false;
      errorMsg = 'Name should only contain letters.';
    } else if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      valid = false;
      errorMsg = 'Please enter a valid email address.';
    } else if (!message || message.length < 10) {
      valid = false;
      errorMsg = 'Message should be at least 10 characters.';
    }
    if (!valid) {
      msg.textContent = errorMsg;
      msg.style.color = '#e74c3c';
      return;
    }
    msg.textContent = 'Thank you for contacting us! We will get back to you soon.';
    msg.style.color = '#2bbbad';
    this.reset();
  });
}

// Product Card Hover Animation (for extra attention)
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.04)';
    card.style.boxShadow = '0 8px 32px rgba(43,187,173,0.18)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
