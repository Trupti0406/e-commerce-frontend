var swiper = new Swiper(".slide-content", {
  slidesPerView: 5,
  spaceBetween: 25,
  loop: false,
  centerSlide: "true",
  fade: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 5,
    },
  },
});
