$(document).ready(function () {
   @@include("burger.js")
   @@include("marketing.js")
   @@include("slick.min.js")
   @@include("slider.js")
   @@include("tabs.js")
   @@include("props.js")
   @@include("filter.js")
   @@include("rate.js")
   @@include("card.js")
   @@include("dinamic-adaptive.js")
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   testWebP(function (support) {

      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
   // При скролле делаем bg у header'а
   const header = document.querySelector('header');
   window.onscroll = () => {
      if (window.pageYOffset > 150) {
         header.classList.add('active');
      } else {
         header.classList.remove('active');
      }
   };

   let addClose = document.querySelector('.add__close');
   let add = document.querySelector('.add');
   if (add) {
      addClose.addEventListener('click', () => {
         add.classList.add('hide');
         header.classList.add('top');
      });
   }
   // Select
   let customSelects = document.querySelectorAll('.custom-select');
   customSelects.forEach(el => {
      el.addEventListener('click', (e) => {
         e.currentTarget.classList.toggle('active');
         if (e.target.classList.contains('custom-select__item')) {
            let text = e.target.textContent;
            e.currentTarget.querySelector('.custom-select__top').textContent = text;
         }
         if (e.target.classList.contains('dop-select__item')) {
            let text = e.target.textContent;
            let textsvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
            class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path fill="currentColor"
               d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
            </path>
         </svg>`;
            e.currentTarget.querySelector('.custom-select__top').innerHTML = text + textsvg;
         }
      })
   })
   // Quantity
   $('.quantity').each(function () {
      let spinner = $(this),
         input = spinner.find('.quantity-card__counter'),
         btnUp = spinner.find('.quantity-card__plus'),
         btnDown = spinner.find('.quantity-card__minus'),
         min = input.attr('min'),
         max = input.attr('max');
      btnUp.click(function () {
         let oldValue = parseFloat(input.val());
         if (oldValue >= max) {
            var newVal = oldValue;
         } else {
            var newVal = oldValue + 1;
         }
         spinner.find("input").val(newVal);
         spinner.find("input").trigger("change");
      });

      btnDown.click(function () {
         let oldValue = parseFloat(input.val());
         if (oldValue <= min) {
            var newVal = oldValue;
         } else {
            var newVal = oldValue - 1;
         }
         spinner.find("input").val(newVal);
         spinner.find("input").trigger("change");
      });
   })
});