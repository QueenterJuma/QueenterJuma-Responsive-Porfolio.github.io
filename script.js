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
  return menuOpen;
});
const reviewPage = document.querySelectorAll('.nav-item');
for (let i = 0; i < reviewPage.length; i += 1) {
  reviewPage[i].addEventListener('click', () => {
    toggleMenu.classList.toggle('open');
    navigation.classList.toggle('open');
  });
}
/* form-validation */
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  const validError = document.getElementById('validError');
  const email = form.elements[1].value;
  if (email.toLowerCase() !== email) {
    validError.style.display = 'block';
    e.preventDefault();
  }
});
/* Local storage */
function storage(arg) {
  if (arg !== "local") {
    console.log(arg);
    const Data = {
      Name: form.elements[0].value,
      Email: form.elements[1].value,
      Text: form.elements[2].value,
    };
    localStorage.setItem('data', JSON.stringify(Data));
  } else return null;
}
storage('local');
const DataStored = JSON.parse(localStorage.getItem('data'));
form.elements[0].value = DataStored.Name;
form.elements[1].value = DataStored.Email;
form.elements[2].value = DataStored.Text;
