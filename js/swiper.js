const swiper = new Swiper(".plan__slider", {
  slidesPerView: "auto",
  spaceBetween: 50,
  slideToClickedSlide: true,
  loop: true,
  centeredSlides: true,
  slideActiveClass: "card_active",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      spaceBetween: 70,
      slidesPerView: 2,
    },
    650: {
      spaceBetween: 35,
      slidesPerView: 1,
    },
    0: {
      spaceBetween: 15,
      slidesPerView: 1,
    },
  },
});
const featured = new Swiper(".startup__slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 4000,
  allowTouchMove: false,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
});
