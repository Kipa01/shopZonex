let propsColumnsList = document.querySelector('.props-columns__list');
let propsBody = document.querySelector('.props-catalog__body');

// изменение кол-ва элементов в ряду при клике
if (propsColumnsList) {
   propsColumnsList.addEventListener('click', function (e) {
      if (e.target.classList.contains('.props-columns__item') || e.target.closest('.props-columns__item')) {
         let propsColiIems = document.querySelectorAll('.props-columns__item')
         propsColiIems.forEach(el => {
            el.classList.remove('active');
         });
         e.target.classList.add('active');
         let newColumnNum = e.target.dataset.columnsNum;
         propsBody.dataset.columns = newColumnNum;
      };
   });
};

// надо, чтобы при клике на "checkbox-filter" в "catalog-choice" появлялся элемент с именем выбранного чекбокса, а при нажатии на "catalog-choice__close" он удалялся и с него снимался класс active, чтобы он не был активным

let selectItems = document.querySelectorAll('.section-filter__checkbox');
let choiceCatalog = document.querySelector('.catalog-choice');
var selectedCatalog = document.querySelectorAll('.catalog-choice__item');

const assignText = (text) => {
   return (
      `
      <button class="catalog-choice__item" id="${text}">
         ${text}
      <svg class="catalog-choice__close" height="329pt" viewBox="0 0 329.26933 329" width="329pt"
         xmlns="http://www.w3.org/2000/svg">
         <path
            d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
      </svg>
   </button>
     `
   );
};

selectItems.forEach(el => {
   el.querySelector('input').addEventListener('change', (e) => {
      let checked = el.querySelector('input').checked;
      let text = el.querySelector('.checkbox-filter__text').textContent;
      if (checked) {
         choiceCatalog.insertAdjacentHTML('afterbegin', assignText(text));
      } else {
         let element = document.getElementById(text);
         element.remove();
      }
      let newChoiceArray = document.querySelectorAll('.catalog-choice__item');
      newChoiceArray.forEach((elem) => {
         elem.querySelector('svg').addEventListener('click', (e) => {
            elem.remove();
            let id = elem.id;
            document.querySelector(`[data-text="${id}"]`).querySelector('input').checked = false;
            document.querySelector(`[data-text="${id}"]`).classList.remove('section-filter__checkbox--active');
            if (newChoiceArray.length == 1) {
               choiceCatalog.classList.remove('active');
            }
         });
      })
      if (newChoiceArray.length > 0) {
         choiceCatalog.classList.add('active');
      } else {
         choiceCatalog.classList.remove('active');
      }
   });
});

if (choiceCatalog) {
   choiceCatalog.addEventListener('click', (e) => {
      if (e.target.classList.contains('catalog-choice__clear')) {
         Array.from(e.currentTarget.children).forEach(el => {
            if (!el.classList.contains('catalog-choice__clear')) {
               el.remove();
            }
            let checkboxCounter = document.querySelectorAll('.section-filter__counter');
            checkboxCounter.forEach((element) => {
               element.innerHTML = 0;
               element.classList.remove('active');
            });
            selectItems.forEach(el => {
               el.querySelector('input').checked = false;
               el.classList.remove('section-filter__checkbox--active');
            });
         });
         choiceCatalog.classList.remove('active');
      };
   });
};