// "use strict";

// const sumNum = (...num) => num.reduce((acum, vol) => acum + vol);

// sumNum(3, 5, 4, 3, 6);

// const later1 = ['a', 'e', 'o'];
// const later2 = ['b', 'c','d'];

// const all = [...later1, ...later2];

// console.log(all)

// const factorial = (num, num1) => {
//   if (num < 0) {
//     return null;
//   }
//   if (num === 1 || num === 0) {
//     return 1n;
//   }
//   return BigInt(num) * factorial(num - 1);
// };
// console.log(factorial(5));

// const userInput = myNum;
// const myNum = 15;

// while (true) {
//   const userNum = prompt("try to guess my number");

//   if (userNum < myNum) {
//     console.log("try entering a larger number");
//   }
//   if (userNum > myNum) {
//     console.log("try to enter a smaller number");
//   }

// console.log("congratulations!!!!");
// }

// myNum = 25;
// while (myNum === userNum) {
//   userNum = prompt("try to guess my number");
//   // myNum === userNum;

//   if (myNum > userNum) {
//     console.log("try entering a larger number");
//   }
//   if (myNum < userNum) {
//     console.log("try to enter a smaller number");
//   }
// }
// console.log("congratulations!!!!");

// let bigNum = (a, b) => (a > b ? a : b);

// console.log(bigNum(17, 2));

const str = 'to Be or NoT To bE';

countVowels=word=>word.split("").reduce((c,l)=>(["a","e","i","o","u"].indexOf(l.toLowerCase())+1)?++c:c,0);
 console.log(countVowels(str))


 1111