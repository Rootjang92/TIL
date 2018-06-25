// let foo = 123;
// {
  // let foo = 456;
  // let bar = 456;
// }
// console.log(foo); // 123
// console.log(bar); // reference error

// let bar = 123;
// let bar = 456; // syntax error (중복 선언 금지)
// console.log(bar);
// let bar; // reference error (선언 이전 참조하면 에러 -> Temporal Dead Zone)

// let foo = 1;
// {
  // console.log(foo); // reference error

// let foo = 2; // 지역 변수
// } -> hoisiting

// var func = [];

// for (var i = 0; i < 3; i++) {
//   func.push(function() { console.log(i); });
// }

// for (var j = 0; j < 3; j++) {
//   func[j]();
// } // 3 3 3 -> var i는 전역 변수이기 때문에 


// var funcs = [];

// for (var i = 0; i < 3; i++) {
//   (function (index) {
//   funcs.push(function () { console.log(index); });
//   }(i));
// }

// for(var j = 0; j < 3; j++) {
//   funcs[j];
// }

var funcs = [];

for (let i = 0; i < 3; i++) {
  funcs.push(function () { console.log(i); });
}

for (var j = 0; j < 3; j++) {
  console.dir(funcs[j]);
  funcs[j](); 
}

// let 전역변수는 window객체의 프로퍼티가 아니다. (window 참조 불가.)

// const FOO = 123;
// FOO = 456; // error 

