const toggleMenu = document.querySelector(".toggle-menu");
const navigation = document.querySelector(".navigation");
let counterImage = 0;
let menuOpen = false;

/*popup-window*/

const data = [
  {
    id: "modal",
    popup_title: "Tonic",
    popup_canopy_section: ["CANOPY", "Back End Dev", 2015],
    popup_image1: "dec3.png",
    popup_desc1:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    popup_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popup_tags: ["html", "css", "javascript"],
    see_live: "#",
    see_source: "#",
  },

  {
    id: "modal",
    popup_title: "Multi-Post Stories",
    popup_canopy_section: ["CANOPY", "Back End Dev", 2015],
    popup_image1: "dec2.png",
    popup_desc1:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    popup_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popup_tags: ["html", "css", "javascript"],
    see_live: "#",
    see_source: "#",
  },

  {
    id: "modal",
    popup_title: "Tonic",
    popup_canopy_section: ["CANOPY", "Back End Dev", 2015],
    popup_image1: "dec1.png",
    popup_desc1:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    popup_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popup_tags: ["html", "css", "javascript"],
    see_live: "#",
    see_source: "#",
  },

  {
    id: "modal",
    popup_title: "Multi-Post Stories",
    popup_canopy_section: ["CANOPY", "Back End Dev", 2015],
    popup_image1: "dec4.png",
    popup_desc1:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    popup_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popup_tags: ["html", "css", "javascript"],
    see_live: "#",
    see_source: "#",
  },
];

for (key in data) {
  document.getElementById(
    "portfolio"
  ).innerHTML += `<div class="d-flex-column card one">
      <div class="plc-img${counterImage}  images" > 
      </div>
      <div class="card-text">
        <h3>${data[key].popup_title}</h3>
        <ul class='prot'>
          <li><a href="">${data[key].popup_canopy_section[0]}</a></li>
          <li><div class="dot"></div></li>
          <li><a href="">${data[key].popup_canopy_section[1]}</a></li>
          <div class="dot"></div>
          <li><a href="">${data[key].popup_canopy_section[2]}</a></li>
        </ul>
        <p>A daily selection of privately personalized reads; no accounts or sign - ups required.</p >
        <ul class="lang">
          <li><a href="">${data[key].popup_tags[0]}</a></li>
          <li><a href="">${data[key].popup_tags[1]}</a></li>
          <li><a href="">${data[key].popup_tags[2]}</a></li>
        </ul>
        <button onclick = "openModal('${counterImage}')"><a href="#">See Project<a></button>
      </div>
    </div>`;
  counterImage += 1;
}
const openModal = (portfolio) => {
  document.getElementById("top_nav").style.filter = "blur(5px)";
  document.getElementById("main-cont").style.filter = "blur(5px)";
  document.getElementById("modal").style.display = "block";
  document.getElementById(
    "modal"
  ).innerHTML = ` <div class='popup-card-header' id='popup-card-header'>
        <div class='popup-header-title-holder' id='popup-header-title-holder'>
        <h2 class='popup-title' id='popup_title'>Tonic</h2>
        <div class='popup-btn-span'>
        <img src='./image/Icon_Cancel.png' alt='cancel popup' class='cancel-popup' onclick="closeModal()">
        </div>
        </div>
        <ul class='popup-canopy-section' id='popup_canopy_section'>
        <li>CANOPY</li>
        <li><img src="./image/Counter.png" alt="counter dot"></li>
        <li>Back End Dev</li>
        <li><img src="./image/Counter.png" alt="counter dot"></li>
        <li>2015</li>
        </ul>
        </div>
        <img src='./image/${data[portfolio].popup_image1}' alt='popup image' class='popup-image' id='popup_image1'>
        <div class='popup-left-block'>
        <p class='popup-description' id='popup_description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
        
        </p>
        <ul class='popup-tags' id='popup_tags'>
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
        </ul>
        <div class='popup-divider'>
        <div class='popup-action-frame' id='popbtn'>
          <span class='link_btn_container'>
          <button class='popup-left-btn' id='see_live'>See live <a class='popup-giticon' id='git-icon'href='#'><img src='./image/demo_icon.png' alt='demo-icon' /></a></button>
          
          </span>
          <span class='link_btn_container'>
          <button class='popup-right-btn' id='see_source'><p class="see">See source</p> <a class='popup-giticon' id='git-icon'href='#'><i class='fa-brands fa-github'></i></a></button>
          
          </span>
        </div>
        </div>

        </div>
        `;
};

const closeModal = () => {
  document.getElementById("modal").style.display = "none";
  document.getElementById("top_nav").style.filter = "blur(0px)";
  document.getElementById("main-cont").style.filter = "blur(0px)";
};
