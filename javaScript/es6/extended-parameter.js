function foo(...rest) {
  console.log(Array.isArray(rest));
  console.log(rest);
}

foo(1, 2, 3, 4, 5);

function foo1(param, ...rest) {
  console.log(param);
  console.log(rest);
}

foo1(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1);
  console.log(param2);
  console.log(rest);
}

bar(1, 2, 3, 4, 5);

// es5
function sum() {
  var array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  });
}

console.log(sum(1, 2, 3, 4, 5));

// es6
function sum1(...args) {
  console.log(arguments);
  console.log(Array.isArray(args));
  return args.reduce((pre, cur) => pre + cur);
}
console.log(sum(1, 2, 3, 4, 5));

console.log(...[1, 2, 3]); // 1 2 3
console.log(...'Hello'); // H e l l o

console.log(...new Map([['a', '1'], ['b', '2']])); // [a, 1], [b, 2]
console.log(...new Set([1, 2, 3])); // 1 2 3 

const arr = [1, 2, 3];
console.log([...arr, 4, 5, 6]); // [1,2,3,4,5,6]

const arr1 = [1, 2, 3];
const arr2 = [4, 5 ,6];

arr1.push(...arr2);
console.log(arr1); // [1,2,3,4,5,6]

const arr3 = [1,2,3,6];
const arr4 = [4,5];

arr3.splice(3, 0, ...arr4);
console.log(arr3); // [1,2,3,4,5,6]


