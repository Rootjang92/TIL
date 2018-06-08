// 1. 문자열을 숫자로 바꾸기
// strToInt 메소드는 문자열 str을 매개변수로 받는다. 
// str을 숫자로 변환한 결과를 반환하도록 strToInt를 작성하라. 
// 예를들어 str이 '1234'이면 1234를 반환하고, '-1234'이면 -1234를 반환한다. 
// // str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.

// function strToInt(str){
//   var num = '';
//   for(var i = 0; i < str.length; i++){
//     var num = /ig/;
//     num = parseInt(str);
//   }
//   return num;
// }
// console.log(strToInt('1234'));  // 1234
// console.log(strToInt('-1234')); // -1234


// // 2. 수박수박수박수박수박수?
// // waterMelon 함수는 정수 n을 매개변수로 입력받는다. 
// // 길이가 n이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

// // 예를들어 n이 4이면 '수박수박'을 리턴하고 3이라면 '수박수'를 리턴한다.

// function waterMelon(n){
//   var num = '';
//   for(var i = 1; i < n+1; i++){
//     (i % 2 === 1) ? num += '수' : num += '박';
//   }
//   return num;
// }
// console.log('n이 3인 경우: '+ waterMelon(3));
// console.log('n이 4인 경우: '+ waterMelon(4));

// // 9. 정수제곱근 판별하기
// // // nextSqaure함수는 정수 n을 매개변수로 받는다. n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
// // n이 임의의 정수 x의 제곱이 아니라면 'no'을 리턴하는 함수를 작성하라. 
// // 예를들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 'no'을 리턴한다.

// function nextSqaure(n){
//   var root = Math.sqrt(n);
//   return Number.isInteger(root) ? Math.pow(root + 1, 2) : 'no';
// }

// console.log(nextSqaure());    // no
// console.log(nextSqaure(0));   // 1
// console.log(nextSqaure(1));   // 4
// console.log(nextSqaure(2));   // no
// console.log(nextSqaure(3));   // no
// console.log(nextSqaure(121)); // 144
// console.log(nextSqaure(165)); // no
// console.log(nextSqaure(400)); // 441딩


// // 강사님 코딩

// function nextSqaure(n){
//  var root = Math.sqrt(n);
//  return Number.isInteger(root) ? Math.pow(root + 1, 2) : 'no';
// }
// console.log(nextSqaure());    // no
// console.log(nextSqaure(0));   // 1
// console.log(nextSqaure(1));   // 4
// console.log(nextSqaure(2));   // no
// console.log(nextSqaure(3));   // no
// console.log(nextSqaure(121)); // 144
// console.log(nextSqaure(165)); // no
// console.log(nextSqaure(400)); // 441딩


// // 10. Check Palindrom
// // // palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 
// // 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다. 
// // 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라. 
// // 단, 반드시 1자 이상의 문자열을 인자로 전달한다.
// // // 배열문
// function checkPalindrom(str) {
//   return str === str.split('').reverse().join('');
// }
// console.log(checkPalindrom('dad')); // true
// console.log(checkPalindrom('mom')); // true
// console.log(checkPalindrom('palindrom')); // false
// console.log(checkPalindrom('s')); // true


// // 강사님 코딩
// function checkPalindrom(str){
//   // 문자 뒤집기.
//   // true 이냐 false냐.
//   return str === str.split('').reverse().join('');
  
// }
// console.log(checkPalindrom('dad'));

// // 11. 배열의 최대/최소값 구하기.

// function getMaxValueFromArray(array){
//   // var max = Math.max(array);
//   return Math.max.apply(null, array);
//   es6 : return math.max(...array); / ... => spread 연산자.
//   //apply 함수 : 배열(argument의 list) / array인수를 풀어서 제공한다. / null 사용이유: static mathod는 객체를 만들 필요가 없기 때문 => this가 의미가 없어짐.
// }
// console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

// function getMinValueFromArray(array) {
//   // var min = Math.min(array);
//   return Math.min.apply(null, array);
// }
// console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5