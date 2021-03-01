// Marketing
$marketing = document.querySelector('.marketing-intro');
$marketingClose = document.querySelector('.marketing-intro__close');
if ($marketing) { // если $marketing существует
   let counter = 0;
   let delay = 4000;

   let data = [{ // массив с различными объектами, в каждом их которых по два элемента: title и where
      title: 'Title of product 1',
      where: 'Moscow, Russia'
   },
   {
      title: 'Title of product 2',
      where: 'Kiev, Ukraine'
   },
   {
      title: 'Title of product 3',
      where: 'Rome, Italy'
   },
   ];
   let changeMarketingData = () => {
      $marketing.classList.remove('active');
      setTimeout(() => {
         $marketing.classList.add('active');
      }, delay - 2000); // задержка перед запуском = delay-2000; т.е. при вызове функции changeMarketingData сначала удаляется класс active, а через 2секунды добавляется обратно
      let stringTitle = `${data[counter].title}`; // записываем в переменную значение элемента title у первого объекта(или чему будет равен counter) в массиве data
      let stringWhere = `15 minutes ago ${data[counter].where}`; // записываем в переменную значение элемента where у первого объекта(или чему будет равен counter) в массиве data
      $marketing.querySelector('.marketing-intro__place').textContent = stringWhere; // меняем текстовое содержимое блока с классом "marketing-intro__place"
      $marketing.querySelector('.marketing-intro__title').textContent = stringTitle; // меняем текстовое содержимое блока с классом "marketing-intro__title"
      counter++;
      if (counter === data.length) { // если значение counter = длине массива data, то обнуляем счетчик, чтобы перебор и подстановка данных пошли по кругу
         counter = 0;
      }
   }
   changeMarketingData(); // вызов функции
   setInterval(changeMarketingData, 8000); // вызов функции changeMarketingData через каждые 8 секунд
   $marketingClose.addEventListener('click', (e) => { // при клике на $marketingClose удаляем у $marketing класс active
      $marketing.classList.remove('active');
   });
};

$marketingprod = document.querySelector('.marketing-product');
$marketingprodClose = document.querySelector('.marketing-product__close');
if ($marketingprod) { // если $marketing существует
   let counterprod = 0;
   let delayprod = 4000;

   let dataprod = [{ // массив с различными объектами, в каждом их которых по два элемента: title и where
      title: 'Title of product 1',
      where: 'Moscow, Russia'
   },
   {
      title: 'Title of product 2',
      where: 'Kiev, Ukraine'
   },
   {
      title: 'Title of product 3',
      where: 'Rome, Italy'
   },
   ];
   let changeMarketingDataprod = () => {
      $marketingprod.classList.remove('active');
      setTimeout(() => {
         $marketingprod.classList.add('active');
      }, delayprod - 2000); // задержка перед запуском = delay-2000; т.е. при вызове функции changeMarketingData сначала удаляется класс active, а через 2секунды добавляется обратно
      let stringTitle = `${dataprod[counterprod].title}`; // записываем в переменную значение элемента title у первого объекта(или чему будет равен counter) в массиве data
      let stringWhere = `15 minutes ago ${dataprod[counterprod].where}`; // записываем в переменную значение элемента where у первого объекта(или чему будет равен counter) в массиве data
      $marketingprod.querySelector('.marketing-product__place').textContent = stringWhere; // меняем текстовое содержимое блока с классом "marketing-intro__place"
      $marketingprod.querySelector('.marketing-product__title').textContent = stringTitle; // меняем текстовое содержимое блока с классом "marketing-intro__title"
      counterprod++;
      if (counterprod === dataprod.length) { // если значение counter = длине массива data, то обнуляем счетчик, чтобы перебор и подстановка данных пошли по кругу
         counter = 0;
      }
   }
   changeMarketingDataprod(); // вызов функции
   setInterval(changeMarketingDataprod, 8000); // вызов функции changeMarketingData через каждые 8 секунд
   $marketingprodClose.addEventListener('click', () => { // при клике на $marketingClose удаляем у $marketing класс active
      $marketingprod.classList.remove('active');
   });
};