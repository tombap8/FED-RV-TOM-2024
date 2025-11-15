document.addEventListener("DOMContentLoaded", function () {
  // Hero Slider
  new Swiper(".hero-slider .swiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 650,
    grabCursor: true,
  });

  // Best Stories Slider
  new Swiper(".best-stories-slider .swiper", {
    loop: false,
    navigation: {
      nextEl: ".best-stories-next",
      prevEl: ".best-stories-prev",
    },
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 500,
    grabCursor: true,
    breakpoints: {
      // 모바일
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        /* 1장을 한단위로 넘어가기 */
        slidesPerGroup: 1,
      },
      // 태블릿
      820: {
        slidesPerView: 2,
        spaceBetween: 25,
        /* 2장을 한단위로 넘어가기 */
        slidesPerGroup: 2,
      },
      // 데스크탑
      1025: {
        slidesPerView: 4,
        spaceBetween: 30,
        /* 4장을 한단위로 넘어가기 */
        slidesPerGroup: 4,
      },
    },
  });
});
