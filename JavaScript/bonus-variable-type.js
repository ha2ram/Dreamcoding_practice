'use strict';

// 1. primitive type vs object
// number, string, boolean, null, undefined
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// object
let obj = {
  name: 'ellie',
  age: 5,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('-----');
console.log(obj.name);
console.log(obj2.name);

const obj3 = {
  name: 'ellie',
  age: 5,
};
// const obj3 = {
//   name: 'james',
// };
obj3.name = 'james';
console.log(obj3.name);
