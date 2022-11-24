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



const data = [
  {
    id: "popup - card - container",
    popup_title: "Tonic",
    popup_canopy_section: ["CANOPY", "Back End Dev", 2015],
    popup_image1: "pic1.png",
    popup_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popup_tags: ["html", "css", "javascript"],
    see_live: "#",
    see_source: "#",
  },

  {
    id: "popup - card - container",
    popup_title: "Tonic",
    popup_canopy_section: ["CANOPY", "Back End Dev", 2015],
    popup_image1: "pic2.png",
    popup_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popup_tags: ["html", "css", "javascript"],
    see_live: "#",
    see_source: "#",
  },

  {
    id: "popup - card - container",
    popup_title: "Tonic",
    popup_canopy_section: ["CANOPY", "Back End Dev", 2015],
    popup_image1: "pic3.png",
    popup_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popup_tags: ["html", "css", "javascript"],
    see_live: "#",
    see_source: "#",
  },

  {
    id: "popup - card - container",
    popup_title: "Tonic",
    popup_canopy_section: ["CANOPY", "Back End Dev", 2015],
    popup_image1: "pic4.png",
    popup_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popup_tags: ["html", "css", "javascript"],
    see_live: "#",
    see_source: "#",
  },
];