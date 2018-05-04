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


//прилипающее меню
function getPageScroll() {
  return window.pageYOffset;
}

var fixedContainer = document.querySelector('.fixed-container');
var container = document.querySelector('.container');
var header = document.querySelector('.page-header__top');

window.onscroll = function() {
  if (getPageScroll() > 200) {
    header.classList.add("fixed");
    fixedContainer.style.width = container.offsetWidth + 'px';
  } else {
    header.classList.remove("fixed");
  }
}
//end прилипающее меню


// $(window).on('scroll', function (e) {
//   var $header = $(".page-header__top");
//   var $headerContainer = $(".container");
//   var screen = window.screen;
//   console.log($headerContainer.width());
//   if (getPageScroll() > 200) {
//     $header.addClass("fixed").fadeIn();
//   } else {
//     $header.removeClass("fixed");
//   }
// })

// $('.page-header__top').stickMe({
//     topOffset: 130
// });

// $(document).ready(function(){
//   $('.example').stickMe({
//
//     // Длительность анимации появления
//     transitionDuration: 300,
//
//     // Включает тень у шапки
//     shadow: false,
//
//     // Прозрачность тени у шапки
//     shadowOpacity: 0.3,
//
//     // Включение анимации при появлении шапки
//     animate: true,
//
//     // true: Шапка прилипнет к верху когда окно браузера будет достигнут центр страницы
//     // false: Шапка прилипнет к верху как только пропадет из поля зрения при скролинге страницы
//     triggerAtCenter: true,
//
//     //  Шапка прилипнет к верху при пролистывании страницы на 200 пикселей
//     topOffset: 200,
//
//     // Плавное появление 'fade' или скольжение при появлении 'slide'
//     transitionStyle: 'fade',
//
//     //  Шапка прикреплена к верху при загрузке страницы
//     stickyAlready: false
//
//   });
// })
