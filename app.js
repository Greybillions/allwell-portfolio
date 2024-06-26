// Header Toggle
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', (e) => {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  menuBtn.classList.toggle('fa-xmark');
});

// Typing Effect
const typed = new Typed('.auto-input', {
  strings: ['a Digital Artist!', 'an NFTs Visionary!', 'a Web3 Art Creator!'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});

// Get all links
let navLinks = document.querySelectorAll('nav ul li a');

//Get all sections
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollPos = this.window.scrollY;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (
          section.getAttribute('id') === link.getAttribute('href').substring(1)
        ) {
          link.classList.add('active');
        }
      });
    }
  });
});

// initialize swiper js

const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Autoplay
  autoplay: {
    delay: 10000, // 20000ms = 20 seconds
    disableOnInteraction: false, // Optional: keeps autoplay running even after user interactions
  },
});
