// 동기식
// function func1(){
//   console.log('func1');
//   func2();
// }

// function func2(){
//   console.log('func2');
//   func3();
// }

// function func3(){
//   console.log('func3');
// }

// func1();

// 비동기식

// function func1(){
//   console.log('func1');
//   func2();
// }

// function func2(){
//   setTimeout(function(){
//     console.log('func2');
//   }, 0);

//   func3();
// }

// function func3(){
//   console.log('func3');
// }

// func1();

// event

var elem = document.getElementById('myButton');
elem.addEventListener('click'. function() {
  console.log('Clicked!');
})