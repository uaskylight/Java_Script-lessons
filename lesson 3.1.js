// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

/////////////////////////////////////////////////////////


// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// const loc = user.location;
// console.log(loc);

// console.log(user.hobbies[1]);

//////////////////////////////////////////////////////////////


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// console.log(book.title);
// console.log(book['title']);
// console.log(book['genres']);
// console.log(book['isPublic']);
// const titleAdd = book['title']
// console.log(titleAdd);

///////////////////////////////////////////////////////////////

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.rating);
// book.rating = 10;
// console.log(book.rating);
// book.genres.push('drama');
// console.log(book.genres);


//////////////////////////////////////////////////////////////

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.country = 'spain'
// console.log(book);
// console.log(book.country);

///////////////////////////////////////////////////////////////

// const name = "Генрі Сибола";
// const age = 25;
// const nationality = 'italian';

// const user = {
//   name: name,
//   age: age,
//   nationality: nationality,
// };
// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25
// console.log(user.nationality);

//////////////////////////////////////////////////////////////

// const propName = ("name");
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name); // 'Генрі Сибола'

/////////////////////////////////////////////////////////////

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");


//////////////////////////////////////////////////////////////////////


// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

////////////////////////////////////////////////////////////////////////


// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
// //   addBook(bookName) {
// //     this.books.push(bookName);
// //   },
// //   removeBook(bookName) {
// //     const bookIndex = this.books.indexOf(bookName);
// //     this.books.splice(bookIndex, 1);
// //   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// // bookShelf.addBook("The Mist");
// // bookShelf.addBook("Dream Guardian");
// // console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// // bookShelf.removeBook("The Mist");
// // console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

///////////////////////////////////////////////////////////////////////////////

// const user = 'name';
// const userAbout = {
//     age: 30,
//     nationaluty: 'italian',
// }
// console.log(userAbout.age);
// userAbout[user] = 'alex';
// console.log(userAbout.name);

////////////////////////////////// or /////////////////////////////////

// const user = 'name';

// const x = {
//     age: 90,
//     [user]:'gyguyguyguguy'
// }
// console.log(x.name);

////////////////////////////////////////////////////


// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
// //   removeBook(bookName) {
// //     const bookIndex = this.books.indexOf(bookName);
// //     this.books.splice(bookIndex, 1);
// //   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

////////////////////////////////////////////////////////////////////

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }


////////////////////////////////////////////////////////////////////


// const animal = {
//     legs: 4,
//     age: 12,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4
// console.log(dog.age); // 12

////////////////////////////////////////////////////////////////////


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// const values = Object.values(book);
// console.log(values);

//////////////////////////////////////////////////////////////////

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

////////////////////////////////////////////////////////////////////

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]


//////////////////////////////////////////////////////////////////////////

// const playList = {
//   name: "My syper list",
//     rating: 5,
//     tracks: ["trek-1", "trek-2", "trek-3", "trek-4"],
//     trackCount: 4,
// };
// // console.log(playList);
// // console.log(playList.rating);
// // console.log(playList.tracks);
// // console.log(playList.tracks[2]);

// const propertyName = 'tracks';
// console.log(playList.propertyName); // undefined

// console.log(playList[propertyName]);


//////////////////////////////////////////////////////////////////////////

// const color = 'red';
// const car = 'bmw';

// const x = {
//     color,
//     car,
// }

// console.log(x);

///////////////////////////////////////////////////////////////////////////

// const age = '30';''
// const user = {
//   age,
//   nationality: "italian",
//   changeNat(newNat) {
//     this.nationality = newNat;
//   },
//   addClub(newClub) {
//     this.clubs.push(newClub);
//   },
//   removeClubs(newClub) {
//     this.clubs.slice(newClub, 1);
//   },
// };
// user.clubs = ['Milan']
// console.log(user);
// user.changeNat('Spain');
// console.log(user);
// user.addClub("Napoli", 'Real');
// user.addClub("Real");
// console.log(user);
// user.removeClubs();
// console.log(user);


//////////////////////////////////////////////////////////////////////////

// const user = {
//     age: 12,
//     name: 'Alex',
//     nationality: 'italian',
// }
// const a = Object.keys(user)
// console.log(a);
// const b = Object.values(user);
// console.log(b); 
// const v = Object.entries(user);
// console.log(v);

///////////////////////////////////////////////////////////


// const user = {
//     a: 2,
//     s: 56,
//     v: 12,
// }
// const qwe = Object.values(user);
// let total = 0;
// for (const element of qwe) {
//     total += element

// }
// console.log(qwe);
// console.log(`TOTAL: ${ total }`);

////////////////////////////////////////////////

// const friends = [
//   { name: "Alex", online: false },
//   { name: "Poly", online: true },
//   { name: "Kelly", online: true },
//   { name: "Bill", online: false },
// ];


// console.table(friends);
// for (const friend of friends) {
//     console.log(friend.name);
//     console.log(friend.online);
//   friend.new = 555
// }

// console.table(friends);

//////////////////////////////////////////////////////

////////////////// fined friend for name /////////

/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// // playlist.qwe = 5;

// // playlist.rating = 10;

// // console.log(playlist);

// // console.log(playlist);
// // console.log(playlist.tracks);
// // console.log(playlist.name);
// // console.log(playlist.trackCount);

// const propertyName = 'tracks';

// // console.log(playlist.rating);
// // console.log(playlist['rating']);

// // console.log(playlist.propertyName);
// // console.log(playlist[propertyName]);

// /*
//  * Короткая запись свойств
//  */
// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//   username,
//   email,
// };

// // console.log(signupData);

// /*
//  * Вычисляемые свойства
//  */

// //  <input name="color" value="tomato" >

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

/*
 * Ссылочный тип {} === {}
 */

// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.hello = 100;
// b.hello = 150;

// console.log(a);
// console.log(b);

/*
 * Массивы и функции это объекты
 */

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);

//////////////////////////////////////////////////

/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   changeName(newName) {
//     console.log('this внутри changeName: ', this);

//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// console.log(playlist.getTrackCount());

// playlist.changeName('Новое имя');

// playlist.addTrack('новый трек 1');
// console.log(playlist.getTrackCount());

// playlist.addTrack('новый трек 2');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);

// console.log(playlist);

/////////////////////////////////////////////


/*
 * Перебор через for...in и Object.keys|values|entries
 */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// // const keys = Object.keys(feedback);

// // console.log(keys);

// // for (const key of keys) {
// //   console.log(key);
// //   console.log(feedback[key]);

// //   totalFeedback += feedback[key];
// // }

// // console.log('totalFeedback: ', totalFeedback);

// const values = Object.values(feedback);

// // console.log(values);

// // for (const value of values) {
// //   console.log(value);

// //   totalFeedback += value;
// // }

// // console.log('totalFeedback: ', totalFeedback);


// /////////////////////////////////////////////


// /*
// //  * Работа с коллекцией (массивом объектов)
// //  */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];
// // // console.table(friends);
// // // /*
// // //  * Ищем друга по имени
// // //  */
// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.name);

//     if (friend.name === friendName) {
//       return 'НАШЛИ!!!';
//     }
//   }

//   return 'НЕ НАШЛИ :(';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// // /*
// //  * Получаем имена всех друзей
// //  */

// // const getAllNames = function (allFriends) {
// //   const names = [];

// //   for (const friend of allFriends) {
// //     console.log(friend.name);

// //     names.push(friend.name);
// //   }

// //   return names;
// // };

// // // console.log(getAllNames(friends));

// // /*
// //  * Получаем имена только друзей которые онлайн
// //  */
// // const getOnlineFriends = function (allFriends) {
// //   const onlineFriends = [];

// //   for (const friend of allFriends) {
// //     console.log(friend);
// //     console.log(friend.online);

// //     if (friend.online) {
// //       onlineFriends.push(friend);
// //     }
// //   }

// //   return onlineFriends;
// // };

// // // console.log(getOnlineFriends(friends));

// // const getOfflineFriends = function (allFriends) {
// //   const offlineFriends = [];

// //   for (const friend of allFriends) {
// //     console.log(friend.online);

// //     if (!friend.online) {
// //       offlineFriends.push(friend);
// //     }
// //   }

// //   return offlineFriends;
// // };

// // // console.log(getOfflineFriends(friends));

// // // создать 2 массива онлайн и офлайн?
// // // если тру - в первый, если нет - во второй

// // const getFriendsByStatus = function (allFriends) {
// //   const friendsByStatus = {
// //     online: [],
// //     offline: [],
// //   };

// //   for (const friend of allFriends) {
// //     if (friend.online) {
// //       friendsByStatus.online.push(friend);
// //       continue;
// //     }

// //     friendsByStatus.offline.push(friend);

// //     // const key = friend.online ? 'online' : 'offline';
// //     // friendsByStatus[key].push(friend);
// //   }

// //   return friendsByStatus;
// // };

// // console.log(getFriendsByStatus(friends));


//////////////////////////////////////////////////////////////


/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {},
//   add(product) {},
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// // console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// // console.table(cart.getItems());

// cart.remove('🍎');
// // console.table(cart.getItems());

// // cart.clear();
// // console.table(cart.getItems());

// // cart.increaseQuantity('🍎');
// // console.table(cart.getItems());

// // cart.decreaseQuantity('🍋');
// // cart.decreaseQuantity('🍋');
// // console.table(cart.getItems());

// // console.log('Total: ', cart.countTotalPrice());

////////////////////////////////////////////////////////


// const names = [
//   { club: "milan", country: "italy" },
//   { club: "barselona", country: "spain" },
//   { club: "arsenal", country: "england" },
// ];

// console.table(names);


// const fn = function (allClubs, myClubs) {
//     for (const element of allClubs) {
//         if (element.club === myClubs) {
//           return "FINED";
//         }
//     }
//     return 'NOT FINED'
// }

// console.log(fn(names, "spain"));
// console.log(fn(names, "arsenal"));

///////////////////////////////////////////////////////


//  const friends = [
//   { name: 'Mango', online: true },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
//  ];

// const onlineFriends = function (friendTrue) {
//     const x = [];
//     for (const friend of friendTrue) {
//         if (friend.online) {
//           x.push(friend);
//         }
//     } 
//     return x
// }


// console.log(onlineFriends(friends));

///////////////////////////////////////////

//  const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
//  ];

// console.log(friends);
 
// const myFriends = function (allFriends) {

//     const objectFriends = {
//         online: [],
//         ofline: [],
//     }
//     for (const friend of allFriends) {
//         if (friend.online) {
//             objectFriends.online.push(friend);
//             continue;
//         }
//         objectFriends.ofline.push(friend);
//     }
//     return objectFriends;
// }

// console.log(myFriends(friends));


////////////////////////////////////////////////////////////////////

// const x = {
//     a: 2,
//     x: 34,
//     s: 12,
//     r: 45,
// }
// let ww = 0;
// for (const element of Object.values(x)) {
//     ww += element
// }

// console.log(ww);

////////////////////////////////////////////////////////////////////


// *
//  * Работем с коллекцией товаров в корзине:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)


// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }


const cart = {
  items: [],
  getItems() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};




// // console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// // console.table(cart.getItems());

// cart.remove('🍎');
// // console.table(cart.getItems());

// // cart.clear();
// // console.table(cart.getItems());

// // cart.increaseQuantity('🍎');
// // console.table(cart.getItems());

// // cart.decreaseQuantity('🍋');
// // cart.decreaseQuantity('🍋');
// // console.table(cart.getItems());

// // console.log('Total: ', cart.countTotalPrice());