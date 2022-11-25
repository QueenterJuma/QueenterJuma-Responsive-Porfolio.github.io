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
let container = document.getElementById("popup-card-container");


container.innerHTML = `<div class='popup-card-header' id='popup-card-header'>
    <div class='popup-header-title-holder' id='popup-header-title-holder'>
    <h2 class='popup-title' id='popup_title'>Tonic</h2>
    <div class='popup-btn-span'>
    <img src='./image/Icon_Cancel.png' alt='cancel popup' class='cancel-popup'>
    </div>
    </div>
    <ul class='popup-canopy-section' id='popup_canopy_section'>
    <li>CANOPY</li>
    <li>Back End Dev</li>
    <li>2015</li>
    </ul>
    </div>
    <img src='./image/popup_image.png' alt='popup image' class='popup-image' id='popup_image1'>
    <div class='popup-left-block'>
    <p class='popup-description' id='popup_description'>
      ${data[0].popup_description}
    </p>
    <ul class='popup-tags' id='popup_tags'>
    <li>html</li>
    <li>css</li>
    <li>javascript</li>
    </ul>
    <div class='popup-divider'>
    <div class='popup-action-frame'>
      <div>
      <button class='popup-left-btn' id='see_live'> See live</button>
      <a href='#'><img src='./image/demo_icon.png' alt='demo-icon' /></a>
      </div>
      <div >
      <button class='popup-right-btn' id='see_source'>See source</button>
      <a class='popup-giticon' id='git-icon'href='#'><i class='fa-brands fa-github'></i></a>
      </div>
    </div>
    </div>

    </div>
`;
