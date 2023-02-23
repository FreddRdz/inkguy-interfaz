const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const navBar = document.querySelector('.nav-bar');
let changeDisplay = true;

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navBar.classList.add('scrolled');
  } else {
    if (changeDisplay) {
      navBar.classList.remove('scrolled');
    }
  }
});

const iconoBarras = document.querySelector('.icono-barra');
const navbarLinks = document.querySelector('.nav-bar > ul');
const iconoNav = document.querySelector('.icono-barra');

iconoBarras.addEventListener('click', () => {
  if (changeDisplay) {
    navbarLinks.style.display = 'flex';
    changeDisplay = false;
    navBar.classList.add('scrolled');
    navbarLinks.classList.add('appear');
    iconoNav.classList.remove('fa-bars');
    iconoNav.classList.add('fa-x');
  } else {
    navbarLinks.style.display = 'none';
    changeDisplay = true;

    if (window.scrollY === 0) {
      navBar.classList.remove('scrolled');
    }
    navbarLinks.classList.remove('appear');

    iconoNav.classList.add('fa-bars');
    iconoNav.classList.remove('fa-x');
  }
});
