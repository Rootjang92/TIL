// es5
// var pow = function (x) { return x * x; };
// console.log(pow(10)); // 100

// es6
// const pow = x => x * x;
// console.log(pow(10)); // 100

// es5
// var arr = [1, 2, 3];
// var pow = arr.map(function (x) {
//   return x * x;
// });

// console.log(pow); // [1,4,9]

// es6
// const arr = [1, 2, 3];
// const pow = arr.map(x => x * x);

// console.log(pow); // [1,4,9]

// function Prefixer(prefix) {
//   this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function (arr) {
//   return arr.map(function (x) { // this = pre
//     return this.prefix + ' ' + x; // this = window -> 생성자함수와 객체의 메서드를 제외한 모든 함수 내부의 this는 전역 객체
//   });
// };

// var pre = new Prefixer('Hi');
// console.log(pre.prefixArray(['Lee', 'Kim'])); // ['undefined Lee', 'undefined kim']

// solution 1

// function Prefixer(prefix) {
//   this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function (arr) {
//   var that = this; // prefixer 생성자 함수의 인스턴스 

//   return arr.map(function (x) {
//     return that.prefix + ' ' + x;
//   });
// };

// var pre = new Prefixer('Hi');
// console.log(pre.prefixArray(['Lee', 'Kim'])); // ['Hi Lee','Hi Kim']


// solution 2

// function Prefixer(prefix) {
//   this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function (arr) {
//   return arr.map(function (x) {
//     return this.prefix + ' ' + x;
//   }, this);  // Prefixer 생성자 함수의 인스턴
// };

// var pre = new Prefixer('Hi');
// console.log(pre.prefixArray(['Lee', 'Kim'])); //[ 'Hi Lee', 'Hi Kim' ]

// solution3

// function Prefixer(prefix) {
//   this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function (arr) {
//   return arr.map(function (x) {
//     return this.prefix + ' ' + x;
//   }.bind(this));  // Prefixer 생성자 함수의 인스턴스
// };

// var pre = new Prefixer('Hi');
// console.log(pre.prefixArray(['Lee', 'Kim'])); //[ 'Hi Lee', 'Hi Kim' ]

// 화살표 함수의 this -> 자신을 포함하는 상위 컨텍스트로부터 this 계승받음(Lexical this)

// function Prefixer(prefix) {
//   this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function (arr) {
//   return arr.map(x => `${this.prefix} ${x}`); 
//   };  // Prefixer 생성자 함수의 인스턴

// const pre = new Prefixer('Hi');
// console.log(pre.prefixArray(['Lee', 'Kim'])); //[ 'Hi Lee', 'Hi Kim' ]

