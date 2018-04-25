// /*Мобильное меню*/
// var navMain = document.querySelector(".main-nav");
// var navToggle = document.querySelector(".main-nav-toggle");
//
// navMain.classList.remove('main-nav--nojs');
//
// navToggle.addEventListener("click", function() {
//   if (navMain.classList.contains("main-nav--closed")) {
//     navMain.classList.remove("main-nav--closed");
//     navMain.classList.add("main-nav--opened");
//   } else {
//     navMain.classList.add("main-nav--closed");
//     navMain.classList.remove("main-nav--opened");
//   }
// });
//
// var popap = document.querySelector('.popap');
// var popapOverlay = document.querySelector(".popap-overlay");
// var buy = document.querySelector("#buy");
//
// buy.addEventListener("click", function() {
//     popap.classList.remove("popap--closed");
//     popap.classList.add("popap--opened");
//     popapOverlay.classList.remove("popap--closed");
// });
// window.addEventListener("keydown", function(event) {
//   if (event.keyCode === 27) {
//     if (popap.classList.contains("popap--opened")) {
//       popap.classList.remove("popap--opened");
//       popap.classList.add("popap--closed");
//       popapOverlay.classList.add("popap--closed");
//     }
//   }
// });

$(document).ready(function() {
  $('.slick-slider').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  $('.popup-gallery').each(function () { // the containers for all your galleries
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Загрузка',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: 'изобраджение не найдено',
      }
    });
  });
});
