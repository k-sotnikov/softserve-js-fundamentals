
//оголосив змінні та одразу присвоїв змінним відповідні значення. Чи требо було спочатку оголосити?
let firstName = "Kostiantyn"; //ваше ім’я
let surname = "Sotnikov"; //ваше прізвище
let group = "JS Fundamentals"; //навчальна група
let yearOfBirth = 1982; //ваш рік народження
let isMarried = false; //сімейний стан (логічна змінна)

//Визначте тип кожної змінної.
console.log(typeof firstName); //String
console.log(typeof surname); //String
console.log(typeof group); //String
console.log(typeof yearOfBirth); //Number
console.log(typeof isMarried); //Boolean

//Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
console.log("-----");
console.log(`${yearOfBirth}\r\n${isMarried}\r\n${firstName}\r\n${surname}\r\n${group}`);

//Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
let education = null;
let weight;
console.log("-----");
console.log(typeof education);
console.log(typeof weight);

