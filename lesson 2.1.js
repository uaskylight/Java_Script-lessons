// const colors = ['red','yellow','blue','green'];

// colors[1] = 'black';
// const colorsLength = colors.length;

// console.log(colors); // ['red', 'yellow', 'blue', 'green']
// console.log(colorsLength); // 4
// console.log(colors[2]); // blue
// console.log(colors[5]); // undefined
// console.table(colors); // ['red', 'black', 'blue', 'green']

//////////////////////////////////////////////////////////

// let a = 10; 
// let b = a;
// // a = 30;

// console.log(a === b);
// console.log(a);
// console.log(b);

/////////////////////////////////////////////////////////

// const colors = ["red", "yellow", "blue", "green"];
// const colorsLength = colors.length - 1;

// for (let i = 0; i <= colorsLength; i += 1){
//     console.log(colors[i]);
// }

/////////////////////// or

// const colors = ["red", "yellow", "blue", "green"];
// for (element of colors) {
//     console.log(element);
// }

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


// const cart = [23, 54, 48, 75, 36, 92, 35];
// let total = 0;

// for (element of cart) {
//     console.log(element);
//     total += element
// }
// console.log('total:', total);

//////// or

// const cart1 = [23, 54, 48, 75, 36, 92, 35];
// let total1 = 0;
 
// for (let i = 0; i < cart1.length; i += 1){
//     console.log(cart1[i]);
//     total1 += cart1[i]
// }
// console.log('total:',total1);


////////////////////////////////////////////

// const numbers = [12, 55, 65, 34, 88, 33, 62, 82,44];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
//     if (numbers[i] % 2 === 0) {
//         console.log(`Chotne: ${ numbers[i] }`);
//         total += numbers[i];
//     }
//     //  if (numbers[i] % 2 !== 0) {
//     //    console.log(`Chotne: ${numbers[i]}`);
//     //    total += numbers[i];
//     //  }
// }
// console.log('Total Chotne:', total);


////////////////////// or 

// const numbers = [12, 55, 65, 34, 88, 33, 62, 82, 44];
// let total = 0;

// for (number of numbers){
//   if (number % 2 === 0) {
//     console.log(`Chotne: ${number}`);
//     total += number;
//   }
//   //  if (numbers[i] % 2 !== 0) {
//   //    console.log(`Chotne: ${numbers[i]}`);
//   //    total += numbers[i];
//   //  }
// }
// console.log("Total Chotne:", total);

////////////////////////////////////////////////

// const logins = ['qwerty', 'asdfgh', 'tarantul', 'zxcvbn', 'qazwsx'];
// const user = "tarantul";
// let message = ''


// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];
//     console.log(login);
//     if (login === user) {
//         message = `user ${ user } fined`;
//         break;
//     }
//      message = `user ${user} dont fined`;
// }
// console.log(message);

/////////////////////////////// or



// const logins = ["qwerty", "asdfgh", "tarantul", "zxcvbn", "qazwsx"];
// const user = "tarantul";
// let message = `user ${ user } dont fined`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log(login);
//   if (login === user) {
//     message = `user ${user} fined`;
//     break;
//   } 
// }
// console.log(message);

/////////////////////////  or


// const logins = ["qwerty", "asdfgh", "tarantul", "zxcvbn", "qazwsx"];
// const user = "tarantul";
// let message = `user ${ user } dont fined`;

// for (login of logins) {
//   console.log(login);
//   if (login === user) {
//     message = `user ${user} fined`;
//     break;
//   } 
// }
// console.log(message);

//////////////////////////// or

// const logins = ["qwerty", "asdfgh", "tarantul", "zxcvbn", "qazwsx"];

// console.log(logins.includes("tarantul")); // true

/////////////////////////// or 
// const logins = ["qwerty", "asdfgh", "tarantul", "zxcvbn", "qazwsx"];
// const result = logins.includes('qwerty')? 'TRUE':'FALSE'
// console.log(result);

////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// const numbers = [10, 5, 6, 8, 3, 12, 4];
// let minNumber = numbers[0];

// for (number of numbers) {
//     if (minNumber > number) {
//         minNumber = number;
//     }
// }
// console.log(`This is min number: ${ minNumber }`);

// //////////////////////////////////////////////////////

// const numbers1 = ['23', '76', '21', '98', '54', '12'];
// let maxNumber = [0];

// for (number1 of numbers1) {
//     if (maxNumber < number1) {
//         maxNumber = number1
//     }
// }
// console.log(`This is max number: ${ maxNumber }`);

//////////////////////////////////////////////////////

// const teams = ['real', 'arsenal', 'milan', 'chelsa', 'monaco'];
// let string = '';

// for (team of teams) {
//     string += team +',';
// } 
// string = string.slice(0, length - 1);
// console.log(string);

////////////////// or 

// const teams = ["real", "arsenal", "milan", "chelsa", "monaco"];
// const team = teams.join(', ');

// console.log(teams);
// console.log(team);

////////////////////////////////////

// const string = 'JavaScript';
// const letters = string.split('');
// let invertalString = ''
// console.log(letters);

// for (element of string) {
//     if (element === element.toLowerCase()) {
//         console.log('Small letter - ', element);
//         invertalString += element.toUpperCase();
//     } else {
//         invertalString += element.toLowerCase();
//     }
// }
// console.log(invertalString);

//////////////////////// or

// const string = "JavaScript";
// let invertalString ='';
// for (element of string) {
//      invertalString +=
//     element === element.toLowerCase() 
//              ? element.toUpperCase()
//              : element.toLowerCase(); 
// }
// console.log(invertalString);

//////////////////////////////////////////////////////////

// const title = 'Top 10 benefits of React framework';

// const normalised = title.toLowerCase();
// const word = normalised.split(' ').join('-');
// // const x = word.join('-')

// console.log(word);


////////////////////////////////////////////////////////////

// const array1 = [2, 6, 83, 23];
// const array2 = [43, 7, 65, 12];
// let total = 0;

// const numbers = array1.concat(array2)

// for (number of numbers) {
//     total +=number
// }
// console.log(total);

/////////////////////////////////////////////////////

///////// splice

// const cards = ["cart-1", "cart-2", "cart-3", "cart-4", "cart-5"];


// const cardRemove = "cart-3"; //delete
// const index = cards.indexOf(cardRemove);
// cards.splice(index, 1);

// console.table(cards);

// cards.push('real')
// console.table(cards);
// cards.unshift('milan')
// console.table(cards);
// cards.splice(3, 0, 'napoli');
// console.table(cards);
// cards.pop()
// console.table(cards);


/////////////////////////////////////////////////








