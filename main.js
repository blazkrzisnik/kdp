// Tekoče leto v nogi
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// Mobilni meni
const menu = document.getElementById('menu');
const links = document.getElementById('links');
if (menu && links) {
  menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
  });
}
