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
const email = form.elements[1].value;
form.addEventListener('submit', (e) => {
  const validError = document.getElementById('validError');
  if (email.toLowerCase() !== email.value) {
    e.preventDefault();
    validError.style.display = 'block';
  }
});
/* Local storage */
const Name = document.querySelector('#name');
const Email = document.querySelector('#email');
const Text = document.querySelector('#text');
form.addEventListener('submit', () => {
  const Data = {
    Name: NameData.value,
    Email: EmailData.value,
    Text: TextData.value,
  };
  localStorage.setItem('Data', JSON.stringify(Data));
});
const AutoFiller = localStorage.setItem(Data);
if (AutoFiller) {
  const DataStored = JSON.parse(localStorage.setItem('Data'));
  NameData.value = DataStored.Name;
  EmailData.value = DataStored.Email;
  TextData.value = DataStored.Text;
}
window.onload = () => {
persistData();
};
