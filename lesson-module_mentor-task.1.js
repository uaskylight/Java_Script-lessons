// Модуль 1. Заняття 1. Змінні, типи та оператори
// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.


// const apple = 20;
// const grapes = 13;

// const all = apple + grapes;
// console.log('Total:',all);
// const result = apple - grapes;
// console.log('Difference:',result);


// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// // students = students + 50;
// students += 50
// console.log(students);


// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);
// let num = 4;
// console.log(num ** 0.5) // stepinь or 2
// console.log(num)


// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору / вниз і т.д.значення змінної value. 
// Використовуй методи Math.floor(), Math.ceil() та Math.round().
// Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.9;
// console.log(value);
// console.log(typeof (value));
// const valueMath1 = Math.floor(value);
// console.log(valueMath1);
// const valueMath2 = Math.ceil(value);
// console.log(valueMath2);
// const valueMath3 = Math.round(value);
// console.log(valueMath3);


// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, 
// де A, B - змінні вставлені в рядок.


// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"


// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. 
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, 
// але не як числа, а в вигляді рядків(спеціально для завдання). 
// Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7, 
// тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;


// let weight = '88,3';
// let height = '1.75';

                //   variant 1
// weight = +weight.replace(',', '.'); 
// height = +height.replace(",", "."); 

// const bmi = +(weight / Math.pow(height, 2)).toFixed(1);
// console.log(bmi); // 28.8

               // variant 2

// let weight = "88,3";
// let height = "1.75";
// const commaIndex = weight.indexOf(",");
// const valueComma = weight.slice(commaIndex + 1);
// const valueBeforeComma = Number.parseInt(weight)
// weight = +`${ valueBeforeComma }.${ valueComma }`;
// const result = +(weight / Math.pow(height, 2)).toFixed(1);
// console.log(result);


// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// console.log('A'.charCodeAt()); // 65
// console.log(2 > '12');  // true  50 > 49
// console.log(2 > '12');  // false  2 > 49


// Example 8 - Логічні оператори
// Яким буде результат виразів?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);


// Example 9 - Значення за замовчуванням та оператор нульового злиття
// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. 
// В іншому випадку має присвоюватися значення defaultValue.Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false.
// Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);


// Example 10 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);



