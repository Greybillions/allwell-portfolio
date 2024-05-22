// Header Toggle
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', (e) => {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  menuBtn.classList.toggle('fa-xmark');
});

// Typing Effect
const typed = new Typed('.auto-input', {
  strings: ['a Digital Artist!', 'an NFTs Artist!', 'a Designer!'],
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
