
//  * Функции
//  * - Функциональные выражения
//  * - Аргументы и параметры
//  * - Возврат значения

// const change = function () {
//     console.log('Hello');
// }
// change()

///////////////////////////////////

// const add = function (a, b) {

//     const result = a + b
//     console.log(result);
// }
// add(2,6) // argument
// add(7,4)




// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   console.log('Выполянется функция add');

//   return x + y;
// };
// const x = add(3, 4);
// console.log(x);


// const r1 = add(5, 3);
// console.log('r1: ', r1);

// const r2 = add(10, 15);
// console.log('r2: ', r2);

// const r3 = add(30, 50);
// console.log('r3: ', r3);

///////////////////////////////////////////

// const fn = function(value){
//     if (value < 30) {
//         return 'less then 30'
//     }
//     return 'more then 30'
// }
// console.log(fn(60));

////////////////////////////////////////////

// const fn = function (value) {
//   console.log(1);
//   console.log(2);

//   if (value < 50) {
//     return 'Меньше чем 50';
//   }

//   return 'Больше чем 50';
// };

// console.log('Результат функции: ', fn(10));

// console.log('Результат функции: ', fn(1000));

/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */
// const fnA = function () {
//   console.log('Выполняется функция A');
// };

// const fnB = function () {
//   console.log('Выполняется функция B');
// };

// const fnC = function () {
//   console.log('Выполняется функция C');
// };

// console.log('Лог перед вызовом функции A');

// fnA();

// console.log('Лог после вызова функции A');

// console.log('Лог перед вызовом функции B');
// fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции C');
// fnC();
// console.log('Лог после вызова функции C');

/////////////////////////////////////////////////

// const car = [43, 65, 34, 12, 76, 4, 6, 23, 96];
// let total = 0;

// for (let element of car) {
//     total += element
// }
// console.log(total);

//////////////// or

// const car = function (items) {
//     let total = 0;
//     for (const item of items) {
//         total += item 
//     }
//     return total;
// }
// console.log('total:', car([3, 65, 34, 12, 76, 4, 6, 23, 96]));

////////////////////////////////////////////


// const team = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }



// team(['real', 'arsenal', 'milan', 'napoli']);
// team([2, 5, 4, 7]);
// team(['spain', 'england', 'italy']);

//////////////////////////////////////////////

// const logins = ['qwerty','asdffg','zxcvbn','tttttttt','qazxsw']
// const findLogin = function (AllLogins, loginToFined) {
//     console.log(AllLogins);
//     console.log(loginToFined);


//     for (const login of AllLogins) {
//         if (login === loginToFined) {
//             return 'Login fined'
//         }
//     }
//     return `${loginToFined} Not fined`;
// }


// console.log(findLogin(logins, "qwerty"));
// console.log(findLogin(logins, "asdffg"));
// console.log(findLogin(logins, "zxcvbn"));
// console.log(findLogin(logins, "tttttttt"));
// console.log(findLogin(logins, "qazxsw"));

// ///////////////////////////////////////////////



// const logins = ['qwerty','asdffg','zxcvbn','tttttttt','qazxsw']
// const findLogin = function (AllLogins, loginToFined) { 

// }

// const logins = ["qwerty", "asdffg", "zxcvbn", "tttttttt", "qazxsw"];
// let result = `Login dont fined`;
// for (const login of logins) {
//     if (login === 'tttttttt') {
//         result = `Login ${login} fined`
//     }
// }
// console.log(result);


////////////////////////////////////// or

// const logins = ['qwerty','asdffg','zxcvbn','tttttttt','qazxsw']
// const findLogin = function (AllLogins, loginToFined) {
//     return AllLogins.includes(loginToFined) ? 'Fined' : 'Not fined'; 
// }
// console.log(findLogin(logins,'tttttttt'));

///////////////////////////////////////


// const numbers = [23, 46, 23, 7, 78, 4, 24, 9];
// let result = numbers[0];
// for (const number of numbers) {
//     if (number < result) {
//         result = number;
//     }
// }
// console.log('min number:', result);

///////////////////// or function

// const numbers = function (numbers) {
//     let result = numbers[0];
//     for (const number of numbers) {
//       if (number < result) {
//         result = number;
//       }
//     }
//     return result
// }
// console.log(numbers([23,56,234,26,3,32,67]));

//////////////////////////////////////////













