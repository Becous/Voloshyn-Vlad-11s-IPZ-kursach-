const swiper = new Swiper(".plan__slider", {
  initialSlide: 2,
  slidesPerView: 1,
  spaceBetween: 50,
  slideToClickedSlide: true,
  // centeredSlides: true,
  slideActiveClass: "card_active",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    650: {
      spaceBetween: 35,
    },
    900: {
      spaceBetween: 70,
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
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
