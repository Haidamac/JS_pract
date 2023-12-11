// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let f1 = 3.14;
let f2 = 2.7;
let n5 = 16
let b1 = true;
let b2 = false;

console.log(hello + ' ' + owu + '.' + com + '.' + ua);
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(f1);
console.log(f2);
console.log(n5);
console.log(b1);
console.log(b2);

let firstName = 'Hryts';
let middleName = 'Yakovych';
let lastName = 'Varenyk';

let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

let a = 100; let b = '100'; let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

let name = prompt("What is your name?");
let surname = prompt("What is your surname?");
let age = Number(prompt("How old are you?"));
let personNew = name + " " + surname + " " + age;

console.log(personNew);
