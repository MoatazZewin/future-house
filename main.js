const btnToggle = document.getElementById("btn-toggle");
const headerList = document.getElementById("header-list");

btnToggle.addEventListener("click", () => {
  btnToggle.ariaExpanded = !JSON.parse(btnToggle.ariaExpanded);
  headerList.classList.toggle("show");
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
