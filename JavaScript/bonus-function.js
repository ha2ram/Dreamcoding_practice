'use strict';

// 2. function
const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;

function add(num1, num2) {
  return num1 + num2;
}

const sum = add(3, 4);
console.log(sum);

const doSomething = add;

const result3 = doSomething(2, 3);
console.log(result3);
const result4 = add(2, 3);
console.log(result4);

function print(a, b) {
  console.log(`${a} ${b}`);
}

print(8, 33);

function divide(num1, num2) {
  return num1 / num2;
}

function surprise(operator) {
  const result = operator(2, 3);
  console.log(result);
}

surprise(add);
surprise(divide);
