var total = 0;
var testArray = [1,3,5,7,9];

// forEach
testArray.forEach(function (item, index, array) {
  console.log('[' + index + '] = ' + item);
  total += item;
});

console.log(total); // 25
console.log(testArray); // [1,3,5,7,9]

testArray = [1,2,3,4];

testArray.forEach(function (item, index, array){
  array[index] = Math.pow(item, 2);
});

console.log(testArray); // [1,4,9,16]

// break : error


// Counter -> forEach

function Counter(){
  this.sum = 0;
  this.count = 0;
}

Counter.prototype.add = function (array) {
  array.forEach(function (entry){
    this.sum += entry;
    this.count++;
  }, this);
};

var counter = new Counter();
counter.add([2,5,9]);
console.log(counter.count); // 3
console.log(counter.sum); // 16


// map

var numbers = [1, 4, 9];

// 배열 순회하며 각 요소에 대하여 인자로 주어진 콜백함수 실행
var roots = numbers.map(function (item) {
  return Math.sqrt(item);
});

console.log(roots); // [1,2,3]
console.log(numbers); // [1,4,9]

numbers = [1,4,9];

roots = numbers.map(function (item){
  return ++item; // return 해야 새로운 배열이 반영.
});

console.log(roots); // [2,5,10]
console.log(numbers); // [1,4,9]


function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  return arr.map(function (x) {
    return this.prefix + x;
  }, this);
};

var pre = new Prefixer('-webkit-');
var preArr = pre.prefixArray(['linear-gradient', 'border-radius']);
console.log(preArr); // [ '-webkit-linear-gradient', '-webkit-border-radius' ]


//filter

var result = [1,2,3,4,5].filter(function (item, index, array){
  console.log('[' + index + '] = ' + item);
  return item % 2;   // 1은 true로 평가.
});
console.log(result); // [1,3,5]

// 필터 동작 흉내 함수. 
Array.prototype.myFiter = function(f) {
  if(!f || {}.toString.call(f) !== '[object Function]'){
    throw new TypeError(f + ' is not a function ');
  };

  var result = [];
  for (var i = 0; i < this.length; i++){
    if (f(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

var result = [1,2,3,4,5].filter(function (item, index, array){;
  console.log(`[${index}] : ${item} of [${array}]`);

// [0] : 1 of [1,2,3,4,5]
// [1] : 2 of [1,2,3,4,5]
// [2] : 3 of [1,2,3,4,5]
// [3] : 4 of [1,2,3,4,5]
// [4] : 5 of [1,2,3,4,5]
  return item % 2;
});

console.log(result); // [1,3,5]


// reduce

var result = [1,2,3,4,5].reduce(function (previousValue, currentValue, currentIndex, array){
  console.log(previousValue + '+' + currentValue + '=' + (previousValue + currentValue));
  return previousValue + currentValue;
});

console.log(result);

// 1+2=3
// 3+3=6
// 6+4=10
// 10+5=15
// 15


// some

var res = [2,5,8,1,4].some(function (item){
  return item > 10;
});
console.log(res); // false

res = [12,5,8,1,4].some(function (item){
  return item > 10;
});
console.log(res); // true

res = ['apple', 'banana', 'mango'].some(function (item){
  return item === 'banana';
});
console.log(res); // true

