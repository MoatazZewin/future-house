const btnToggle = document.getElementById("btn-toggle");
const headerList = document.getElementById("header-list");
const buttonUp = document.getElementsByClassName("up-button")[0];

const btnLang = document.getElementsByClassName("lang")[0];

btnLang.addEventListener("click", () => {
  if (document.documentElement.dir == "rtl") {
    document.documentElement.dir = "ltr";
    btnLang.textContent = "EN";
  } else {
    document.documentElement.dir = "rtl";
    btnLang.textContent = "AR";
  }
});

btnToggle.addEventListener("click", () => {
  btnToggle.ariaExpanded = !JSON.parse(btnToggle.ariaExpanded);
  headerList.classList.toggle("show");
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  autoplay: {
    delay: 2000, // Auto-slide every 3 seconds
    disableOnInteraction: false, // Keep autoplay after interaction
    reverseDirection: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", // Next button
    prevEl: ".swiper-button-prev", // Previous button
  },
});

let headerSection = document.getElementsByTagName("header")[0];
let anchorLink = [...document.querySelectorAll("ul#header-list li a")];
let buttonSpan = document.querySelector("header button span");
let ul = document.getElementById("header-list");

let lang = document.querySelector("header .lang");

window.addEventListener("scroll", () => {
  if (+window.scrollY > 0) {
    headerSection.classList.add("sticky");
    anchorLink.map((e) => {
      e.classList.add("anchor-color");
    });
    buttonSpan.classList.add("anchor-color-2");
    buttonSpan.style.setProperty("--after-color", "white");
    ul.style.setProperty("--color-scroll", "white");
    lang.classList.add("scroll");
  } else {
    headerSection.classList.remove("sticky");
    anchorLink.map((e) => {
      e.classList.remove("anchor-color");
    });
    buttonSpan.classList.remove("anchor-color-2");
    buttonSpan.style.setProperty("--after-color", "rgb(117 27 31)");
    ul.style.setProperty("--color-scroll", "rgb(117 27 31)");
    lang.classList.remove("scroll");
  }

  if (+window.scrollY > 200) {
    buttonUp.classList.add("top");
  } else {
    buttonUp.classList.remove("top");
  }
});

AOS.init();
