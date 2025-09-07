// Mobile nav toggle
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger) {
  burger.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    burger.setAttribute('aria-expanded', String(!open));
  });
}

// Smooth year
document.getElementById('year').textContent = new Date().getFullYear();

// Optional: Close menu on link click (mobile)
document.querySelectorAll('.menu a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 560) menu.style.display = 'none';
  });
});
