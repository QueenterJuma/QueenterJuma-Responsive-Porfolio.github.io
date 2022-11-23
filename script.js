const toggleMenu = document.querySelector(".toggle-menu");
const navigation = document.querySelector(".navigation");
let menuOpen = false;
toggleMenu.addEventListener("click", () => {
  if (!menuOpen) {
    toggleMenu.classList.add("open");
    menuOpen = true;
  } else {
    toggleMenu.classList.remove("open");
    menuOpen = false;
  }
  navigation.classList.toggle("open");
  return menuOpen;
});
const reviewPage = document.querySelectorAll(".nav-item");
for (let i = 0; i < reviewPage.length; i += 1) {
  reviewPage[i].addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    navigation.classList.toggle("open");
  });
}
