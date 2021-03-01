let ratingItemList = document.querySelectorAll('.rating-card__item'); // создаем массив из элементов рэйтинга(звездочек)
let ratinItemsArray = Array.prototype.slice.call(ratingItemList);

ratinItemsArray.forEach(item => { // идем по массиву
   item.addEventListener('click', function (e) { // при клике вызывается ф-ия
      let currentValRate = item.getAttribute('data-rate'); // которая получается значение атрибута 'data-rate' у текущего элемента
      let valRate = item.closest('.rating-card__body'); // записываем в новую переменную блок, внутри которого наши звездочки( блок, у которого атрибут отвечает за кол-во активных звездочек)
      valRate.setAttribute('data-total-rate', currentValRate) // записываем значение переменной currentValRate в атрибут 'data-total-rate родительского блока'
   })
});