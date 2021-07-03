// console.log('script work!');


// let memberName = 'Ivan';
// let memberSurname = 'Ivanov';

// let fullName = memberName + ' ' + memberSurname;

// console.log(fullName);

// memberName = '<p class="text">dsfsd</p>';

// console.log(memberName);

// console.log(9 - '5d');




// // Массивы
// let fimlsArray = ['Хвост виляет собакой', 'Гаттака', 'Терминатор 2'];

// console.log(fimlsArray[2]);


// let person = {
//   name: 'Ivan',
//   age: 23
// }

// console.log(person.age);

// let a = 1;

// console.log(a);

// a++;

// console.log(a);

// console.log(2 == 1);


// let age = 24;

// if (age >= 18) {
//   console.log('Магазин процветает');
// } else {
//   console.log('Платим штраф и закрываем магазин...');
// }


// let surname;

// if (surname) {
//   console.log('Здравствуйте, ' + surname);
// } else {
//   console.log('Здравствуйте, товарищ!');
// }

// function checkCount(c) {
//   if (c > 25) {
//     console.log('Выгодный заказ! Беремся');
//     return;
//   }

//   console.log('Не беремся');
// }

// function summ(a, b) {
//   if (typeof a != 'number') {
//     console.log('Первый аргумент (a) - должен быть числом');
//     return;
//   }

//   if (typeof b != 'number') {
//     console.log('Второй аргумент (b) - должен быть числом');
//     return;
//   }

//   // return - возврпащаат результат работы функции
//   let count = a + b;
//   checkCount(count);
//   return count;
// }

// let summ1 = summ(4, 5);
// console.log(summ1);

// let print = function () {
//   console.log('sssss');
// }

// print();


// let cat = {
//   name: 'Barsik',
//   age: 4,
//   mow: function () {
//     console.log('Я кот ' + this.name + ' и мне ' + this.age + '! Mow');
//   }
// }

// cat.mow();




// let servicesItems = document.querySelectorAll('.services_item');

// servicesItems.forEach(function (item) {
//   item.style.color = '#e45577';
// });



// $(document).ready(function () {

//   Запуск видео
//   $('.play-btn').on('click', function () {
//     $('.video').attr('controls', '');
//     $('.video-preview').hide();
//     $('.video').show();

//     // метод .play() - метод нативногно js, поэтому нужно получить сам элемент, а не объект jQuery
//     $('.video')[0].play();

//     // this - эт то самое на что я нажал, те кнопка
//     $(this).hide();
//   });


//   // Открытие меню на мобильном
//   $('.burger').on('click', function () {
//     $('.main-nav').slideToggle();
//   });

//   // Пока не умеем работать с ширинами
//   $('.main-nav a').on('click', function () {
//     $('.main-nav').slideUp();
//   });

//   $('.team-links a').on('click', function (e) {
//     e.preventDefault();

//     let index = $(this).index('.team-links a');
//     console.log(index);

//     $('.team-links a').removeClass('active');
//     $(this).addClass('active');

//     $('.team-info').removeClass('team-info-visible');
//     $('.team-info').eq(index).addClass('team-info-visible');
//   });

//   console.log($('.js-slider-wrap'));

//   // Делаем карусель в секции photos
  

//   // Вариант не работает, если кнопки сделали сами.
//   // если есть несколько каруселей на странице, то кнопки всех каруселей
//   // будут управлять последней
//   $('.js-slider').slick({
//     autoplay: true,
//     dots: true,
//     prevArrow: '.js-btn-prev',
//     nextArrow: '.js-btn-next',
//   });

  

// });

$(document).ready(function () {

  

});









