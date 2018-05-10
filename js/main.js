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

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').each(function () { // the containers for all your galleries
    $(this).magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
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

function formHandler(selector) {

  // debugger;
  $(selector).on('submit', function (e) {

    e.preventDefault();

    var _this = $(this),
      $nameField = _this.find('input[name=name]'),
      $emailField = _this.find('input[name=email]'),
      $phoneField = _this.find('input[name=phone]'),
      $cityField = _this.find('input[name=city]');


    if
    ($emailField.val() === '')
    {
      $emailField.addClass('has-error');
    }
    if ($phoneField.val() === '') {
      $phoneField.addClass('has-error');
    }
    else if ($emailField.val() !== '' && $phoneField.val() !== '') {

      var ajaxdata = 'name=' + $nameField.val() + '&email=' + $emailField.val() + '&phone=' + $phoneField.val() + '&city=' + $cityField.val();


      $.ajax({
        type: "POST",
        url: "form_handler.php",
        data: ajaxdata,
        success: function ($output) {
          $('.modal-content').html($output);
          yaCounter47997302.reachGoal('order');
        },
        error: function (error) {
          console.log(error);
        }
      });
    }
  });


}

formHandler('#contactForm');

// активация/деактивация кнопки отправки формы
function toggleButton(id, target) {
  if (target.checked) {
    document.getElementById(id).removeAttribute('disabled');
  } else {
    document.getElementById(id).setAttribute('disabled', 'disabled')
  }
}


