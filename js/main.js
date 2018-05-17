$(document).ready(function() {
  $('.slick-slider').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 5,
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
// function getPageScroll() {
//   return window.pageYOffset;
// }
//
// var fixedContainer = document.querySelector('.fixed-container');
// var container = document.querySelector('.container');
// var header = document.querySelector('.page-header__top');
//
// window.onscroll = function() {
//   if (getPageScroll() > 200) {
//     header.classList.add("fixed");
//     fixedContainer.style.width = container.offsetWidth + 'px';
//   } else {
//     header.classList.remove("fixed");
//   }
// }
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

var menuWrapper = document.querySelector('#navbarNav');
var menuLinks = menuWrapper.querySelectorAll('a');

// document.addEventListener('scroll', onScroll);
//
// function onScroll(event){
//   console.log(window.pageYOffset)
//   console.log(menuLinks[1].href);
// }


let animElements = $('.anim');
const animate = function () {
  animElements.each(function () {
    let pos;
    $this = $(this);
    if (this.getBoundingClientRect().top <= window.innerHeight && this.getBoundingClientRect().bottom > 0) {
      if (pos !== 0) {
        $this.removeClass('out out_top');
        $this.addClass('in');
      }
    } else {
      if (pos !== 1) {
        $this.removeClass('in');
        $this.addClass('out');
      }
    }
    if (this.getBoundingClientRect().bottom <= 0) {
      if (pos !== -1) {
        $this.addClass('out out_top');
        $this.removeClass('in');
        pos = -1;
      }
    }
  });
};
window.addEventListener('scroll', function () {
  window.requestAnimationFrame(function () {
    animate();
  });
});
