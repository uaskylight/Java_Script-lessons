/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */
// const user = 4;
// const oneStar = 1;
// const twoStar = 2;
// const threeStar = 3;
// const fourStar = 4;
// const fiveStar = 5;
// let message = `There is not such hotel ${ user }`
// if (user === oneStar) {
//     message = ('You choose 1 star hotel, price 20$');
// } else if (user === twoStar) {
//     message = ('You choose 2 star hotel, price 30$');
// } else if (user === threeStar) {
//     message = ('You choose 3 star hotel, price 50$');
// } else if (user === fourStar) {
//     message = ("You choose 4 star hotel, price 70$");
// } else if (user === fiveStar) {
//   message = ("You choose 5 star hotel, price 120$");
// }
// console.log(message);
////////////////////////  or ////////////////////////
// const user = 7;
// const oneStar = 1;
// const twoStar = 2;
// const threeStar = 3;
// const fourStar = 4;
// const fiveStar = 5;
// // let message = `There is not such hotel ${ user }`
// let message = '';
// switch (user) {
//   case oneStar:
//     message = "You choose 1 star hotel, price 20$";
//     break;
//   case twoStar:
//     message = "You choose 1 star hotel, price 30$";
//     break;
//   case threeStar:
//     message = "You choose 1 star hotel, price 50$";
//     break;
//   case fourStar:
//     message = "You choose 1 star hotel, price 70$";
//     break;
//     case fiveStar:
//         message = "You choose 1 star hotel, price 120$";
//         break;
//     default:
//     console.log(`There is not such hotel ${ user }`);
// }
// console.log(message);
/////////////////////////////  or
// const stars = 1;
// let price;
// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Такого кол-ва звезд нет");
// }
////////////////////////////////////////////////////////////////////////
//////////////////////// switch //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log("Такого кол-ва звезд нет");
// }
// console.log(price);
/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */
// const stars = 1;
// let price;
// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Такого кол-ва звезд нет");
// }
// console.log(price);
// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;
//   case 3:
//   case 4:
//     price = 30;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log("Такого кол-ва звезд нет");
// }
/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */
//  1. сделать переменные
// const option = 1526;
// let message = "";
// 2. сделать switch 1 2 3
// 3. в каждом кейсе записать в message строку
// switch (option) {
//   case 1:
//     message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
//     break;
//   case 2:
//     message = "Курьер доставит заказ завтра с 9:00 до 18:00";
//     break;
//   case 3:
//     message = "Посылка будет отправлена сегодня";
//     break;
//   default:
//     message = "Вам перезвонит менеджер";
// }
// 4. сделать лог message
// console.log(message);
////////////////////////////////////////////////////////////////////////
//////////////////////// for  //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// for (let i = 0; i < 10; i += 1){
//     console.log(i);
// }
// console.log('Welcome');
/*
 * Цикл for
 */
// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
// }
// const min = 60;
// const max = 70;
// for (let i = min; i < max; i += 1){
// console.log(i);
// }
// console.log('qweqwe');
/*
 * Pre-increment и Post-increment
 */
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// let a = 10;
// const b = ++a;
// console.log(a);
// console.log(b);
/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */
//  1 сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;
// // // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // 3 сгенерить случайную зп
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   console.log(`ЗП работника номер ${i} - ${salary}`);
//   // 4  прибавить к тоталу
//   totalSalary += salary;
// }
// // // 5 лог
// console.log('totalSalary: ', totalSalary);
/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */
//  1 вары
// const min = 0;
// const max = 5;
// let total = 0;
// фор от min до max с шагом в 1
// for (let i = min; i <= max; i += 1) {
//   // проверяем остаток от деления
//   if (i % 2 !== 0) {
//     // console.log('Не чётное: ', i);
//     continue;
//   }
// пишем в сумму
//   console.log('чётное: ', i);
//   total += i;
// аналог +=
// total = total + i;
// }
// console.log('total: ', total);
////////////////////////////////////////////////////////////////////////////////////
/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */
// let balance = 10000;
// const payment = 1221;
// if (payment < balance) {
//     balance -= payment
//     console.log(`«На счету осталось ${balance} кредитов»`);
// } else if (payment > balance) {
//     console.log(` «На счету недостаточно средств для проведения операции!»`);
// } else {
//     console.log(`«Операция завершена»`);
// }
// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
// );
// if (payment <= balance) {
//   balance -= payment;
//   // balance = balance - payment
//   console.log("Все хорошо, снимаем деньги... Спасибо за покупку!");
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log("На счету недостаточно средств для проведения операции!");
// }
// console.log("Операция завершена");
////////////////////////////////////////////////////////////////////////////
/*
 * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
 * от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */
// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;
// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовый партнер, скидка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Серебрянный партнер, скидка 5%');
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log('Золотой партнер, скидка 10%');
//   discount = 0.1;
// } else {
//   console.log('Не партнёр, скидка 0%');
// }
// payment -= payment * discount;
// // payment = payment - payment * discount;
// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
// );
// totalSpent += payment;
// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);
// const btnAdd = document.querySelector('button[data-add')
// btnAdd.textContent = 'welcome'
// const valueInput = document.querySelector("input[data-value");
// const value = +valueInput.value;
// let total = 0;
// btnAdd.addEventListener('click', function (){
//     console.log('click hehehe');
//     total += value
//     console.log(valueInput.value);
//     console.log(total);
//     valueInput.value = 0
// });
////////////////////////////////////////
const s = [5, 7, 2];
function editInPlace() {
  // Змініть код лише під цим рядком
  s[0] = [2];
  s[1] = [5];
  s[2] = [7];
  // Використання s = [2, 5, 7] може бути недійсним
  // Змініть код лише над цим рядком
}
editInPlace();
