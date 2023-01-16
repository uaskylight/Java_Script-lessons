//////////////////////////////////////////////////////////////////////
////////////////////// *** variable  *** ////////////////////////////
////////////////////////////////////////////////////////////////////

// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const message = 'Welcome';
// const isOpen = true;
// const showIdConfirm = false;

// // const number;            ??? ////// variable is not initialized
// const name = 'Alex';
// // const name = 'Kelly';   ???? ////// not name, already yet
// let user;                       //////  undefined
// user = 'Lviv'

// console.log(age);
// console.log(totalPrice);
// console.log(userName);
// console.log(message);
// console.log(isOpen);
// console.log(showIdConfirm);
// console.log(user);
// console.log("Hello:",userName);
// console.log(`${message} ${userName}, your age is ${age}`); /// this is pattern string

////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
////////////////////// *** type  *** ////////////////////////////////
////////////////////////////////////////////////////////////////////

// const nameCountry = 'America';
// const numberUser = '100';
// const numberTen = 10;
// const isBoolean = true;

// console.log(numberUser); // string
// console.log(numberTen); //  10
// console.log(typeof(numberTen)); // number
// console.log(typeof (nameCountry)); // string
// console.log(typeof isBoolean);  // boolean
// console.log(+(true)); // 1
// console.log(Number(false)); // 0

// const type = typeof nameCountry;
// console.log(type); // string

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
////////////////////// *** alert  *** ////////////////////////////////
/////////////////////////////////////////////////////////////////////

// console.log('before: alert');
// alert('Hello')
// console.log('after: alert');

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
////////////////////// *** confirm, prompt *** ///////////////////////
/////////////////////////////////////////////////////////////////////

// const shouldRenew = confirm('Do you want extend the subscription')
// console.log(shouldRenew); // if 'OK' - true, if 'CANCEL'- false

// const quantity = prompt('Enter quantity of goods');
// console.log(quantity); // if 'OK' - result, if 'CANCEL' - null, if 'empty line' - empty line

// let quantityOne = prompt("Enter quantity of goods");
// quantityOne = Number(quantityOne);
// console.log(typeof(quantityOne)); // number, not string

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
///////////// *** Number.parseInt,   Number.parseFloat *** ///////////
/////////////////////////////////////////////////////////////////////

// let elementWidth = '50px'; // string
// const result = Number.parseInt(elementWidth); //number
// console.log(result); // 50 number

// let elementHeight = "234.34px";
// const resultHeight = parseFloat(elementHeight);
// console.log(resultHeight);

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
///////////////////////// toFixed(digits) ////////////////////////////
/////////////////////////////////////////////////////////////////////

// let salary = 14000.3445674;
// console.log(salary.toFixed(1)); // string

// let salaryResult = +salary.toFixed(1); // Number or + this is --'number'
// console.log(salaryResult); // number

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// console.log(Math);

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
///////////////////////// raising to a degree ////////////////////////
/////////////////////////////////////////////////////////////////////

// const base = 2;
// const power = 5;
// const resultA = Math.pow(base, power); // or console.log(2 ** 5);
// console.log(resultA);

// // *Напиши скрипт який просить користувача ввести число та ступінь,
// // * зводить число в цей ступінь і виводить результат у консоль

// // 1. попросити ввести число і зберегти змінну
// let numberEntr = prompt('Enter your number')
// numberEntr = +numberEntr;
// console.log(numberEntr);
// // 2. попросити ввести ступінь і зберегти змінну
// let numberEntrDegree = prompt("Enter your degree");
// numberEntrDegree = Number(numberEntrDegree);
// console.log(numberEntrDegree);
// // 3. Звести введені дані у ступінь та вивести
// // const resultEnDeg = numberEntr ** numberEntrDegree; // or
// const resultEnDeg = Math.pow(numberEntr, numberEntrDegree); // or
// console.log(resultEnDeg);

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// console.log(Math.round(2.2)); // 2
// console.log(Math.round(2.7)); // 3

// Генерим псевдослучайные числа

// console.log(Math.random());
// //Math.random()*(max + min) + min

// const max = 10;
// const min = 20;
// const resultMaxMin = Math.random() * (max - min) + min;
// console.log(resultMaxMin);
// const wholetAllNumberA = +resultMaxMin.toFixed()  // or
// const wholetAllNumberB = Math.round(Math.random() * (max - min) + min); //or

// console.log(wholetAllNumberA);
// console.log(wholetAllNumberB);

// Отримуємо псевдовипадковий колір

// const colors = ['tomato', 'teal', 'orange', 'green', 'yellow'];
// const maxCol = colors.length -1;
// const minCol = 0;
// const indexCol = Math.round(Math.random() * (maxCol - minCol) + minCol);

// const colorIndx = colors[indexCol];
// console.log(colorIndx);

// document.body.style.backgroundColor = colorIndx;

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
////////////////////////////// string ////////////////////////////////
/////////////////////////////////////////////////////////////////////

// const messageStr = 'Welcome to my house'
// const messageLenght = messageStr.length;
// console.log(messageLenght); // 19 str

// console.log('Hello ' + 'Kelly'); // concatenacya

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// * Напиши скрипт який виведе рядок у форматі:
// * «Гість x y поселяється в z номер q»,
// * Підставивши замість x y z q значення змінних

// const room = 350;
// const type = 'VIP';
// const settlement = ('Welcome Alex, your room ' + room + " apartment " + type)
// console.log(settlement);

// * Шаблонні рядки (template strings)
// * Повертаємося до складання рядка поселення до готелю
// const room = 350;
// const type = "VIP";
// const settlement = `Welcome Kelly, your room ${ room }, apartment ${ type }`
// console.log(settlement);

// * Нормалізація з методом toLowerCase()

// const brand = 'SamSUng';
// const x = 'samsung';
// console.log(brand === x); // false

// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);
// console.log(x === normalizedBrand); //true
// console.log(brand[2]);
// console.log(brand.slice(3).toLowerCase());
// console.log(brand[0] + brand.slice(1).toLowerCase());

// * Пошук у рядку з методом includes()

// function checkForSpam(message) {

//   let result;
//   // Change code below this line
//   result = message.toLowerCase(message).includes('spam');
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam('spaM'));

///////////////////////////////////////////////////////////////////////
////////////////////////////// includes///////////////////////////////
/////////////////////////////////////////////////////////////////////

// const spam1 = 'spam';
// const sale2 = 'sale';

// const string1 = 'Hello, its not spam. Do you want 10000?';
// const string2 = 'Big sale,SPAM dont miss';
// const string3 = 'Advertising company "Big BOSS"';

// console.log(string1.includes(spam1)); // true //'spam'
// console.log(string2.includes(spam1)); // is in the line 'sale'? // not - false

// const lowerCase = string2.toLocaleLowerCase().includes(spam1)
// console.log(lowerCase); // true

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
/////////////////////// comparison-operations ////////////////////////
/////////////////////////////////////////////////////////////////////

// console.log(12 < 7); // false
// console.log(12 > 7); // true
// console.log('12' > 7); // true

// console.log(false == 0); // true
// console.log(!false === 0); // false
// console.log(false === 0); // false
// console.log(false == null); // false

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
/////////////////////////    &&   ||     /////////////////////////////
/////////////////////////////////////////////////////////////////////

//    on false
// console.log(6 && 8); // 8
// console.log(45 && 2); // 2
// console.log(2 && 5 && 0 && 3); // 0
// console.log(6 && null); // null
// console.log(6 && false); // false // string (true)
// console.log(6 && 'false'); // false
// console.log(false && true); // false

//                       // on true

// console.log(7 || 3); // 7
// console.log(0 || false || 87); // 87
// console.log(false || true); // true
// console.log(6 && null || 4 || null && 8); // 4

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
/////////////////////////    task    /////////////////////////////
/////////////////////////////////////////////////////////////////////

// * Напишіть скрипт, який перевіряє вхідні числа
// * у відрізку позначений x1 і x2.

// const number = 10;
// const result = number > 0 && number < 0;
// console.log(result); // false

// const number = 10;
// const result = number > 0 || number < 0;
// console.log(result); // true

// const number = 127
// const x1 = 10;
// const x2 = 20;

// if (number < x1 || number > x2) {
//   console.log('false:');
// } else {
//   console.log('true:');
// }

// * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
// * Для цього користувач повинен бути:
// * - friend
// * - online
// * - без режиму не турбувати

// const isOnline = true;
// const isFriend = true;
// const isDnd = true;
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат? ', canOpenChat);

// * Напиши скрипт перевірки підписки користувача при доступі до контенту
//  * - Є три типи підписки: free, pro та vip.
//  * - Отримати доступ можуть тільки користувачі pro та vip

// const userFree = "FREE";
// const userPro = "PRO";
// const userVip = 'VIP';
// const result = userFree === userPro || userFree === userVip;
// console.log(result);

// ///// or

// const sub = "free";
// const canAccessContent = sub === "pro" || sub === "vip";
// console.log("Есть доступ к контенту? ", canAccessContent);

// Оператор розгалуження if

// if (5> 30) {
// // тіло
// console.log('qweqwe');
// }

// console.log('далі');
/*
 * Оператор розгалуження if...else
 */

// if (5> 30) {
// console.log('x > y');
// } else {
// console.log('x<y');
// }

/*
 * Оператор розгалуження else...if
 */

// const salary = 5000;

// if (salary <= 500) {
// console.log('Рівень 1');
// } else if (salary > 500 && salary <= 1500) {
// console.log('Рівень 2');
// } else if (salary > 1500 && salary < 3000) {
// console.log('Рівень 3');
// } else {
// console.log('Рівень 4');
// }

// console.log('qweqwe');

/*
 * Тернарний оператор
 */
//const balance = 1000;
// let message;

// if (balance> = 0) {
//message = 'Позитивний баланс';
// } else {
// message = 'Негативний баланс';
// }

// const message = balance > = 0? 'Позитивний баланс': 'Негативний баланс';

// console.log(message);

/*
 * Блокова область видимості змінних
 */

// if (true) {
// const a = 5;
// console.log(b);
// }

// if (true) {
//const b = 10;

// console.log(a);
// }

//  * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной
//  суммы за всё время(партнёрская программа).
//  *
//  * - Общая сумма потраченного хранится в переменной totalSpent
//  * - Сумма текущего платежа хранится в переменной payment
//  * - Скидка хранится в переменной discount
//  *
//  * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
//  * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
//  * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
//  * - Если потрачено меньше 100) - не партнёр, скидка 0%
//  *
//  * - В результате вывести сообщение
//  * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»

// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;
// let message = ('У вас еще нет партнерской скидки');
// if (totalSpent >= 100 && totalSpent <= 1000) {
//     message = ("Бронзовый партнер, скидка 2%");
// } else if (totalSpent > 1000 && totalSpent <= 5000) {
//     message = ("Серебрянный партнер, скидка 5%");
// } else if (totalSpent > 5000) {
//     message = ("Золотой партнер, скидка 10%");
// }
// // 'Бронзовый партнер, скидка 2%'
// // 'Серебрянный партнер, скидка 5%'
// // 'Золотой партнер, скидка 10%'
// // 'У вас еще нет партнерской скидки'
// console.log(message);
