// es6

// const pow = x => x * x;
// console.log(pow(10)); // 100

const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [1, 4, 9]

function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  return arr.map(x => `${this.prefix} ${x}`);
};

const pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'kim']));

// ['Hi Lee', 'Hi kim']

// const person = {
//   name: 'Lee',
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }
// };

// person.sayHi(); // Hi Lee

const person = {
  name: 'Lee'
};

Object.prototype.sayHi = function() {
  console.log(`Hi ${this.name}`);
};

person.sayHi();
