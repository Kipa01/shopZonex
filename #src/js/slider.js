// ======== При нажатии на "main-slider__next, main-slider__prev" срабатывает пролистывание ========

$('.slider-catalog-intro__arrow--next').on('click', function () {
   $('.slider-catalog-intro').slick('slickNext');
});
$('.slider-catalog-intro__arrow--prev').on('click', function () {
   $('.slider-catalog-intro').slick('slickPrev');
});

// ======== /При нажатии на "main-slider__next, main-slider__prev" срабатывает пролистывание ========

// ======== Стандартная настройка слайдера ========

$('.intro-slider').slick({
   arrows: false,
   dots: true,
   infinite: false,
   autoplay: true,
});

$('.slider-catalog-intro').slick({
   arrows: false,
   autoplay: true,
   infinite: true
});


// Связь двух слайдеров

$('.slider-card__body').slick({
   arrows: false,
   fade: true,
   infinite: true,
   asNavFor: '.slider-card__thumbs',
});

$('.slider-card__thumbs').slick({
   slidesToShow: 5,
   arrows: false,
   infinite: true,
   asNavFor: '.slider-card__body',
});

$('.slider-card__thumbs').on('click', '.slick-slide', function (e) { // при клике на боковой слайдер срабатывает перелистывание в основном слайдере
   e.preventDefault();
   var goToSingleSlide = $(this).data('slick-index');
   $('.slider-card__body').slick('slickGoTo', goToSingleSlide);
   let productSliderTrack = e.currentTarget.closest('.slick-track'); // отсюда делаем, чтобы при клике вертикальный слайдер не смещался влево
   productSliderTrack.style.transform = "translate3d(0px, 0px, 0px)";
});

$('.slider-card__body').on('swipe', function (event, slick, direction) { // делаем, чтобы при свайпе главного слайдера, боковой не смещался влево
   let thumbsSlider = document.querySelector('.slider-card__thumbs');
   let thumbsSliderSlickTrack = thumbsSlider.querySelector('.slick-track');
   thumbsSliderSlickTrack.style.transform = "translate3d(0px, 0px, 0px)";
});

$('.product-slider__body').slick({
   slidesToShow: 4,
   slidesToScroll: 4,
   arrows: false,
   dots: true,
   infinite: false,
   autoplay: true,
   responsive: [
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
         }
      },
      {
         breakpoint: 769,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
         }
      },
      {
         breakpoint: 481,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      }
   ]
});

// ======== /Стандартная настройка слайдера ========