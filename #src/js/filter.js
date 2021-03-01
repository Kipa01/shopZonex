$('.filter__body').slideUp(0);
$('.section-filter__body').slideUp(0);

$('.filter__burger').click(function (event) {
   $(this).toggleClass('active');
   if ($(this).hasClass('active')) {
      $('.filter__body').slideDown(500);
   } else {
      $('.filter__body').slideUp(500);
   }
});

$('.section-filter__btn').click(function (event) {
   $(this).toggleClass('active');
   if ($(this).hasClass('active')) {
      $(this).closest('.section-filter__header').next().slideDown(300);
   } else {
      $(this).closest('.section-filter__header').next().slideUp(300);
   }
});

let filtersArray = document.querySelectorAll('.filter__section');
filtersArray.forEach((e) => {
   let filtersLabelsArray = e.querySelectorAll('.section-filter__item');
   filtersLabelsArray.forEach((el) => {
      el.querySelector('input').addEventListener("change", () => {
         el.querySelector('label').classList.toggle("section-filter__checkbox--active");
         let checkboxArrayActive = e.querySelectorAll(".section-filter__checkbox--active");
         let checkboxCounter = e.querySelector('.section-filter__counter');
         if (checkboxArrayActive.length > 0) {
            checkboxCounter.classList.add('active');
            checkboxCounter.innerHTML = checkboxArrayActive.length;
         } else {
            checkboxCounter.classList.remove('active');
         }
      });
   });
});
