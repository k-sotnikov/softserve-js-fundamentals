// ---------------------task 1---------------------
// const upperCase = function(string) {
//     const regexp = /^[A-Z]/;
//     let isACapital = regexp.test(string);
//     if (isACapital) {
//         return "String's starts with uppercase character";
//     } else {
//         return "String's not starts with uppercase character";
//     }
// }

// console.log(upperCase('regexp'));
// console.log(upperCase('RegExp'));

// ---------------------task 2---------------------

// const checkEmail = function(string) {
//     let regexp = /^[0-9A-Za-z][-0-9A-z\.]+[0-9A-Za-z]@([-a-z0-9]+\.){1,3}[a-z]{2,}$/
//     return regexp.test(string);
// }

// console.log(checkEmail("Qmail2@gmail.com"));

// ---------------------task 3---------------------

//console.log("cdbBdbsbz".match(/d(b+)(d)/i));

// ---------------------task 4---------------------

//console.log("Java Script".replace(/(\w+)\s(\w+)/, "$2 $1"));

// ---------------------task 5---------------------

// const cardNumberValidation = function(string) {
//     return /([0-9]{4}-?){4}/.test(string);
// }

// console.log(cardNumberValidation("9999-9999-9999-9999"));

// ---------------------task 6---------------------

// const checkEmail = function(string) {
//     let regexp = /^[0-9A-Za-z](\w*[\.@]?\w*)*-?(\w*[\.@]?\w*)*$/;
//     //також ще додав у вираз символи "@" та ".", без яких не буде працювати. дозволив їм траплятися скільки завгодно разів але по 1 символу за раз, тому що не було іншої умови але зможу кількість раз зменшити
//     //проблема в тому що не можна w+ вставити усередину [], а саме /[\w*\.?@?]*/ не працює, пробував навіть A-Za-z0-9 разом з \.?@? всередину [] помістити і теж не працює
//     if (regexp.test(string)) {
//         return "Email is correct!";
//     } else {
//         return "Email is not correct!";
//     }
// }

// console.log(checkEmail('my_mail@gmail.com'));
// console.log(checkEmail('#my_mail@gmail.com'));
// console.log(checkEmail('my_ma--il@gmail.com'));

// ---------------------task 7---------------------

// const checkLogin = function(string) {
//     let regexp = /^[a-zA-Z]((\d*\.?\d*)?[a-zA-Z]*)*$/;

//     let isCorrect = regexp.test(string);
//     let numbers =  string.match(/\d+\.?\d*/g).toString().replace(/,/g, ", ");

//     return `${isCorrect}\r\n${numbers}`;
// }

// console.log(checkLogin('ee1.1ret3'));
// console.log(checkLogin('ee1*1ret3'));
