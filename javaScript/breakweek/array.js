// 배열의 생성
// 배열 : 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다. JS의 배열은 객체이며 유용한 내장 메서드를 포함하고 있다.

// 배열 리터럴 : 0개 이상의 값을 쉼표로 구분하여 []로 묶는다. 첫번째 값은 인덱스 0, 존재하지 않는 요소에 접근하면 undefined를 반환한다.

var emptyArr = [];

var arr = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];

console.log(emptyArr[1]); // undefined
console.log(arr[1]); // one
console.log(emptyArr.length); // 0
console.log(arr.length); // 10
console.log(typeof arr); // object

// 배열 리터럴은 객체 리터럴과 달리 프로퍼티명이 없고 각 요소의 값만 존재한다.


// 배열 요소 추가.

var arr = [];
console.log(arr[0]); // undefined

arr[0] = 'one';
arr[3] = 'three';
arr[7] = 'seven';

console.log(arr); // [ 'one', <2 empty items>, 'three', <3 empty items>, 'seven' ]

// 배열 요소의 열거

var numbersArr = ['zero', 'one', 'two', 'three'];
numbersArr.foo = 10;

for (var prop in numbersArr){
  console.log(prop, numbersArr[prop]); // 0 zero 1 one 2 two 3 three foo 10
}

numbersArr.forEach((item, i) => console.log(i, item)); // 0 'zero' 1 'one' 2 'two' 3 'three'

for (var i=0; i < numbersArr.length; i++){
  console.log(i, numbersArr[i]);
} // 0 'zero' 1 'one' 2 'two' 3 'three'


// length property

var myArray = [];
console.log(myArray.length); // 0

myArray[1000] = true;

console.log(myArray.length); // 1001
console.log(myArray[0]); // undefined


// Metho

// 1. Array.prototype.indexOf(searchElement: T, fromindex?: number): number
// indexOf 메소드의 인자로 지정된 요소를 배열에서 검색하여 인덱스를 반환한다. 중복 요소가 있을 시 첫번째 인덱스만 반환, 없으면 -1 

var arr = [1, 2, 2, 3];
console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(4)); // -1
console.log(arr.indexOf(2, 2)); // 2


// 2. Array.prototype.concat(...items: Array<T[]|T>): T[] 
// concat 메서드의 인수로 넘어온 값들을 자신의 복사본에 요소로 추가하고 반환한다.

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

var c = a.concat(b);
console.log(c); // [ 'a', 'b', 'c', 'x', 'y', 'z' ]

var d = a.concat('String');
console.log(d);  // [ 'a', 'b', 'c', 'String' ]

var e = a.concat(b, true);
console.log(e); // [ 'a', 'b', 'c', 'x', 'y', 'z', true ]

console.log(a);  // [ 'a', 'b', 'c' ]

// 3. Array.prototype.join(separator?: string): string
// 배열 요소 전체를 생성한 문자열을 반환한다. 구분자는 생략 가능하며 기본 구분자는 , 이다.

var arr = ['a', 'b', 'c', 'd'];

var x = arr.join();
console.log(x); // a,b,c,d

var y = arr.join('');
console.log(y); // abcd

var z = arr.join(':');
console.log(z); // a:b:c:d

// 4. Array.prototype.pop(): T | undefined (this)
// 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다. 빈 배열일 경우 undefined, 대상 배열 자체를 변경하며, LIFO 

var a = ['a', 'b', 'c'];
var c = a.pop();

console.log(a); // [ 'a', 'b' ]
console.log(c); // c


// 5. Array.prototype.push(...items:T[]):number (this)
// 인자로 전달된 항목의 배열의 마지막에 추가한다. concat과는 다르게 인자로 전달된 항목을 마지막 요소로 추가한다. 반환값을 배열의 새로운 length 값이다. 대상배열 자체를 변경한다.

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

var c = a.push(b);
console.log(a); // [ 'a', 'b', 'c', [ 'x', 'y', 'z' ] ]
console.log(c); // 4

console.log([1, 2].concat([3, 4])); // [ 1, 2, 3, 4 ]


// 6. Array.prototype.reverse(): this
// 배열 요소의 순서를 반대로 변경한다. 원본 배열이 변경된다. 

var a = ['a', 'b', 'c'];
var b = a.reverse();

console.log(a); // [ 'c', 'b', 'a' ]
console.log(b); // [ 'c', 'b', 'a' ]

// 7. Array.prototype.shift(): T | undefined  // this
// 배열의 첫요소를 제거하고 제거한 요소를 반환한다. 빈 배열일 경우 undefined, 대상 배열 자체를 변경한다. FIFO

var a = ['a', 'b', 'c'];
var c = a.shift();

console.log(a); // [ 'b', 'c' ]
console.log(c); // a


// 8.Array.prototype.slice(start=0, end=this.length): T[]
// 배열의 특정 부분에 대한 복사본을 생성한다. start에 해당하는 인덱스를 갖는 요소부터 end에 해당하는 인덱스를 가진 요소 전까지 복사된다. 


var items = ['a', 'b', 'c'];

var res1 = items.slice(0, 1);
console.log(res1); // [ 'a' ]

var res2 = items.slice(1, 2);
console.log(res2); // [ 'b' ]

var res3 = items.slice(1);
console.log(res3); // [ 'b', 'c' ] 1이후 모든 요소.

var res4 = items.slice(-2);
console.log(res4);  // [ 'b', 'c' ] 끝에서 2개 요소 반환.

var res5 = items.slice();
console.log(res5); // [ 'a', 'b', 'c' ]

// 유사 배열 객체를 배열 객체로

function sum(){
  var arr = Array.prototype.slice.call(arguments);
  console.log(arr); // [ 1, 2, 3 ]

  return arr.reduce(function (pre, cur){
    return pre + cur;
  });
}

console.log(sum(1, 2, 3)); // 6

// 9. Array.prototype.splice(start: number, deleteCount = this.length-start,...items:T[]):T[] // this
// 기존의 배열 요소를 제거하고 그 위치에 새로운 요소를 추가한다. 배열 중간에 새로운 요소를 추가할 때도 사용한다.

// 배열 중간에 새로운 요소 추가
var itmes = ['one', 'two', 'three', 'four'];

var res = items.splice(1, 0 ,'x');
console.log(items); // [ 'a', 'x', 'b', 'c' ]
console.log(res); // []

// 요소를 해체하여 추가할 때.

var items = ['one', 'four'];
Array.prototype.splice.apply(items, [1, 0].concat(['two', 'three']));
console.log(items); // [ 'one', 'two', 'three', 'four' ]

// 10. Array.prototype.sort(compareFn?: (a:T,b:T) => number): this
// 배열의 내용을 적절하게 정리, 정렬된 배열을 반환한다. 

var fruits = ['Banana', 'Orange', 'Apple'];

fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

fruits.reverse();
console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]

// 숫자 정렬시 유니코드 포인트 순서 주의해서.
// 숫자 정렬.

var points = [40, 100, 1, 5, 2, 25, 10];

points.sort(function (a, b) {return a - b; });
console.log(points); // [ 1, 2, 5, 10, 25, 40, 100 ]

points.sort(function (a, b) {return b - a; });
console.log(points); // [ 100, 40, 25, 10, 5, 2, 1 ]

// 객체를 배열로 갖는 요소 정렬.

var todos = [
  { id: 4, content: 'JavaScript'},
  { id: 1, content: 'HTML'},
  {id: 2, content: 'CSS'}
];

// id 기준 정렬.
todos.sort(function(a, b){
  return (a.id > b.id) ? 1: (a.id < b.id) ? -1 : 0;
});
console.log(todos); // [ { id: 1, content: 'HTML' },
                    // { id: 2, content: 'CSS' },
                    // { id: 4, content: 'JavaScript' } ]

todos.sort(function(a, b) {
  return (a.content > b.content) ? 1 : (a.content < b.content) ? -1 : 0;
});
console.log(todos); // [ { id: 2, content: 'CSS' },
                    // { id: 1, content: 'HTML' },
                    // { id: 4, content: 'JavaScript' } ]


// 11. Array.prototype.forEach(callback: (value:T, index:number, array:T[]) -> void, thisArg?:any):void
// 배열을 순회하여 배열의 각 요소에 대하여 인자로 주어진 콜백함수를 실행한다. 콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있다. 
// 반환값을 undefined
// arr.forEach(callback[, thisArg])

var total = 0;
var testArray = [1, 3, 5, 7, 9];

testArray.forEach(function (item, index, array) {
  console.log('[' + index+ '] = ' + item);
  total += item;
});  // [0] = 1 [1] = 3 [2] = 5 [3] = 7 [4] = 9

console.log(total); // 25
console.log(testArray); // [ 1, 3, 5, 7, 9 ]

testArray = [1, 2, 3, 4];

testArray.forEach(function( item, index, array){
  array[index] = Math.pow(item, 2);
});
console.log(testArray); // [ 1, 4, 9, 16 ]

// break 문 사용 못함.

// 두번째 인자로 this전달 가능.
function Counter(){
  this.sum = 0;
  this.count = 0;
}

Counter.prototype.add = function (array) {
  // entry는 array의 배열 요소 값.
  array.forEach(function (entry){
    this.sum += entry;
    this.count++;
  }, this);
};

var counter = new Counter();
counter.add([2, 5, 9]);
console.log(counter.count); // 3
console.log(counter.sum); // 16