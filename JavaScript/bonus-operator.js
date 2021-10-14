'use strict';

// 3. operator
// false: 0, -0, null, false, NaN, undefined, ''
// true: -1, 'hello', 'false'

if (true) {
  console.log('true!');
} else {
  console.log('false!');
}

if (false) {
  console.log('true!');
} else {
  console.log('false!');
}

let num; // undefined

if (num) {
  console.log('true!');
} else {
  console.log('false!');
}

// num && console.log(num);

let obj = {
  name: 'ellie',
};

if (obj) {
  console.log(obj.name);
}

obj && console.log(obj.name);
