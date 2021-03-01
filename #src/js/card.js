let cardSizes = document.querySelectorAll('.size-card__item');
let cardColors = document.querySelectorAll('.color-card__item');
let cardClear = document.querySelector('.size-card__clear');

let cardCurrentColor = "red";
let prevColor = "red";

function changeSize() {
   cardSizes.forEach(size => {
      size.classList.remove('active');
   });
   this.classList.add('active');
   if (cardCurrentColor == "white") {
      cardSizes.forEach(size => {
         if (size.classList.contains('active')) {
            size.style.color = "#151515";
         } else {
            size.style.color = "#858585";
         }
      });
   } else {
      cardSizes.forEach(size => {
         if (!size.classList.contains('active')) {
            size.style.color = "#858585";
         } else {
            size.style.color = "#fff";
         }
      });
   }
}

function changeColor() {
   let color = this.getAttribute('color');
   cardCurrentColor = color;
   if (color == prevColor) return;
   cardColors.forEach(c => {
      c.classList.remove('active')
   });
   this.classList.add('active');
   document.documentElement.style.setProperty('--primary', color);
   prevColor = color;
   if (cardCurrentColor == "white") {
      cardSizes.forEach(size => {
         if (size.classList.contains('active')) {
            size.style.color = "#151515";
         };
      });
   } else {
      cardSizes.forEach(size => {
         if (size.classList.contains('active')) {
            size.style.color = "#fff";
         };
      });
   }
}

cardSizes.forEach(size => {
   size.addEventListener('click', changeSize)
});
cardColors.forEach(c => {
   c.addEventListener('click', changeColor)
});
if (cardClear) {
   cardClear.addEventListener("click", () => {
      cardSizes.forEach(size => {
         size.classList.remove('active');
         size.style.color = "#858585";
      });
      let valRate = document.querySelector('.rating-card__body'); // записываем в новую переменную блок, внутри которого наши звездочки( блок, у которого атрибут отвечает за кол-во активных звездочек)
      valRate.setAttribute('data-total-rate', 0) // записываем значение переменной currentValRate в атрибут 'data-total-rate родительского блока'
   });
};