const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  speed: 700,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    350: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },

    820: {
      slidesPerView: 3.4,
      spaceBetween: 30,
    },
  },
});

const burgerBtn = document.querySelector(".burger__btn");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
body.addEventListener("click", () => {
  burger.classList.remove("open-burger");
  nav.classList.remove("open");
  body.classList.remove("overflow");
});

$(".burger__btn").click(function (e) {
  e.stopPropagation();
  $("body").toggleClass("overflow");
  $(".burger").toggleClass("open-burger");
  $(".nav").toggleClass("open");
});
