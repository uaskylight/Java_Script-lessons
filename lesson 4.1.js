// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Манго")); // Ласкаво просимо Манго.

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }


//////////////////////////////////////////////////////



// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

/////////////////////////////////////////////////////

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

///////////////////////////////////////////////////////////

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");

///////////////////////////////////////////////////////


// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

////////////////////////////////////////////////////////////


// for (let i = x; i < v; i += 1){
//     console.log(i);
// }

/////////////////////////////////////

// function age(n) {
//     for (let i = 0; i < n; i += 1){
//         console.log(i);
//     }
// }
// age(10);


//////////////////////////////////////

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

////////////////////////////////////////////////////////


// const numbers = [5, 10, 15, 20, 25];

// // // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

////////////////////////////////////////////////////////

// const add = (a, b, c) => {
//   return a + b + c;
// };

// console.log(add(1, 2, 3));

//////////////////////////////////////////////////////////

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

///////////////////////////////////////////

// *
//  * Функция обратного вызова (callback)
//  * - Функция может принимать другие функции как параметры
//  * - Функция которая передаётся другой функции как аргумент называетс
//  *   «функцией обратного (отложенного) вызова» (callback-функция)
//  * - Функция которая принимает другую функцию как параметр
//  *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
//  */

// // const fnA = function (message, callback) {
// //     console.log(message);

// //     console.log(callback);
// //     callback(100);
// // };

// // const fnB = function (number) {
// //     console.log('Это лог при вызове fnB', number);
// // };

// // fnA('qweqwe', fnB);

// /*
//  * функция doMath(a, b, callback)
//  */

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// // doMath(2, 3, function (x, y) {
// //     return x + y;
// // });

// // doMath(10, 8, function (x, y) {
// //     return x - y;
// // });

// /*
//  * Отложенный вызов: регистрация событий
//  */

// const buttonRef = document.querySelector(".js-button");

// const handleBtnClick = function () {
//   console.log("Клик по кнопке " + Date.now());
// };

// // buttonRef.addEventListener('click', handleBtnClick);

// /*
//  * Отложенный вызов: геолокация
//  */

// const onGetPositionSuccess = function (position) {
//   console.log("Это вызов onGetPositionSuccess");
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log("Это вызов onGetPositionError");
//   console.log(error);
// };

// // window.navigator.geolocation.getCurrentPosition(
// //     onGetPositionSuccess,
// //     onGetPositionError,
// // );

// /*
//  * Отложенный вызов: интервалы
//  */

// const callback = function () {
//   console.log("Через 2 секунды внутри колбека в таймауте");
// };

// // console.log('В коде перед таймаутом');
// // setTimeout(callback, 2000);
// // console.log('В коде после таймаута');

// /*
//  * Отложенный вызов: http-запрос
//  * - API URL: https://pokeapi.co/api/v2/pokemon
//  */

// const onRequestSuccess = function (response) {
//   console.log("Вызов функции onRequestSuccess после успешного ответа бекенда");
//   console.log(response);
// };

// // fetch('https://pokeapi.co/api/v2/pokemon')
// //     .then(res => res.json())
// //     .then(onRequestSuccess);

// /*
//  * Фильтр
//  */

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// // 1. надо передать функцию
// // 2. функция получает элемент массива
// // 3. если элемент массива удовлетворяет условию то функция вернет true
// // 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);


////////////////////////////////////

// *
//  * Стрелочные функции
//  * - Объявление
//  * - Явный и неявный возврат
//  * - Аргументы
//  * - Неявный возврат объекта
//  */

// // const add = function (a, b, c) {
// //     console.log(arguments);
// //     return a + b + c;
// // };

// // const addArrow = (a, b, c) => {
// //     return a + b + c;
// // };

// // console.log(add(5, 10, 15));
// // console.log(addArrow(5, 10, 15));

// // const fnA = function () {
// //   return {
// //     a: 5,
// //   };
// // };

// // console.log(fnA());

// // const arrowFnA = () => ({ arrowA: 5 });

// // console.log(arrowFnA());

// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// // const callback1 = value => value >= 3;

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);

// console.log(r1);

// // const callback2 = value => value <= 4;

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// // const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

// const r3 = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(r3);

/////////////////////////////////////////////////////////


// const fn1 = function(message){
//   console.log(message);
// };

// fn1("alex");

// ////////////////////////////////// or 


// const fn = (message) =>{
// console.log(message);
// }

// fn('alex')

////////////////////////////////////////////////

// const fnA = function (user, callback,fnC) {
//     console.log(user);
//     callback(777777777)
//     fnC()
// }

// const fnB = function (number) {
//     console.log(`welcome fnB`, number);
// }

// const fnC = function () {
//     console.log('hello fnC');
// }
// fnA('qwerty', fnB, fnC);

//////////////////////////////////////////////////

// const user = function (one, two, callback) {
//    const result = callback(one, two)
//    console.log(result);
// }

// const fnA = function (a,b) {
//     return a+b
// }

// const fnB = function (a, b) {
//     return a*b
// }

// user(5, 3, fnA)
// user(5, 3, fnB);

//////////////////////////////////   or



// const user = function (one, two, callback) {
//     const result = callback(one, two);
    
//   console.log(result);
// };

// user(2,7, function (a, b) {
//   return a + b;
// });

// user(5,8, function (a, b) {
//   return a * b;
// });


//////////////////////////////////////////////


// const buttonRef = document.querySelector('.js-btn')

// const click = function () {
//     console.log('click for button'+ Date.now());
// }

// buttonRef.addEventListener('click', click)

////////////////////////////////////////////////////////

// const positionSuccess = function (position) {
//     console.log(position);
// }

// const positionError = function (error) {
//     console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(
//     positionSuccess,
//     positionError
// );


/////////////////////////////////////////////////////

// const age = (a) => {
//     if (a >= 18) {
//         return `you are adult: ${a}`
//     } 
//     return `you are yang: ${a}`
// }
// console.log(age(20));

/////////////////////////////////////////////////








