const toggleMenu = document.querySelector('.toggle-menu');
const navigation = document.querySelector('.navigation');
let menuOpen = false;

toggleMenu.addEventListener('click', () => {
  if (!menuOpen) {
    toggleMenu.classList.add('open');
    menuOpen = true;
  } else {
    toggleMenu.classList.remove('open');
    menuOpen = false;
  }
  navigation.classList.toggle('open');
});

const reviewPage = document.querySelectorAll('.nav-item').length;
for (let i = 0; i < reviewPage; i += 1) {
  let nav_items = document.querySelectorAll(".nav-item");
  nav_items[i].addEventListener('click', () => {
    toggleMenu.classList.toggle('open');
    menuOpen = false;
    navigation.classList.toggle('open');
   });
}
