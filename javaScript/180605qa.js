// 1.1 1~10,000의 숫자 중 8이 등장하는 횟수 구하기
// 단,8이라는 숫자를 모두 카운팅해야 한다. 

// function getCount8(){
//   var all = '';
//   var count = 0;
//   for(var i = 1; i < 10001; i++){
//     all += i;
//   }
//   for(var j = 0; j < all.length; j++){
//     if(all[j] === '8') count++;
//   }
//   return count;
// }
// console.log(getCount8());

// 강사님 코딩

// function getCount8(){
//   var str = '';
//   var count = 0;
//   for(var i = 0; i <= 10000; i++){
//     str += i;
//   }
//   for(var j = 0; j < str.length; j++){
//     if(str[j] === '8') count++;
//   }
//   return count;
// }
// console.log(getCount8());


// 2. 핸드폰 번호 가리기.
// 핸드폰 요금 고지서 맨 뒷자리 4자리를 제외한 나머지를 *로 바꾸기.

// function hideNumbers(str){
//   var r = '';
//   r = '*'.repeat(str.length - 4)+str.slice(str.length-4, str.length);
//   return r
// }
// console.log(hideNumbers('01033334444'));
// console.log(hideNumbers('027778888'));

// 강사님 코딩

// function hideNumbers(str){
//   var len = str.length - 4;
//   var star = '';
  
//   // for(var i = 0; i < len; i++){
//   //   star += '*';
//   // }
//  return '*'.repeat(len) + str.substring(len);
// }
// console.log(hideNumbers('01033334444'));
// console.log(hideNumbers('027778888'));

// 3. 짝수와 홀수
// num은 1 이상의 정수이며, 음수는 없다. 짝수일 경우 even, 홀수일 경우 Odd를 반환.

// function evenOrOdd(num){
//   if (num % 2 === 0){
//     return 'even'
//   }
//   else {
//    return 'Odd'
//   }
// }
// console.log(evenOrOdd(2));
// console.log(evenOrOdd(3));
// console.log(evenOrOdd(1000));


// 4. 3번을 삼항연산자로 나타내어라

// function evenOrOdd(num){
//   return (num % 2)? 'even' : 'Odd'
// }
// console.log(evenOrOdd(2));
// console.log(evenOrOdd(3));
// console.log(evenOrOdd(1000));

// 5. 문자열 다루기
// alphaString46 함수는 문자열 s를 매개변수로 입력받는다. 
// s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라. 
// 예를들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다

// function alphaString46(s) {
//   var result = '';
//   if ((s.length >= 4 || s.length <= 6) && !isNaN(s)){
//     result = true
//   }
//   else {
//     result = false
//   }
//   return result;
// }
// console.log(alphaString46('1234')); // true
// console.log(alphaString46('9014')); // true
// console.log(alphaString46('723'));  // false
// console.log(alphaString46('a234')); // false
//console.log(alphaString46(''));     // false
//console.log(alphaString46());       // false

// 강사님 코드

// function alphaString46(s) {
  // s가 undefined이면 false를 반환.
  // if (!s) return false;
  // return (s.length >= 4 && s.length <=6) && !isNaN(s);
// }
// console.log(alphaString46('1234')); // true
// console.log(alphaString46('9014')); // true
// console.log(alphaString46('723'));  // false
// console.log(alphaString46('a234')); // false
// console.log(alphaString46(''));     // false
// console.log(alphaString46());       // false

// 6. 문자열 내 p와 y의 개수
// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 
// 대소문자를 구별하지 않으며 s에 'p'의 개수와 'y'의 갯수를 비교해 같으면 true, 
// 다르면 false를 리턴하도록 함수를 완성하라. 'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다. 
// 예를들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.

// function numPY(s) {
//  var p = 0;
//  var y = 0;
//   if (s === undefined){
//   return true;
//   }
//   for(var i = 0; i < s.toLowerCase().length; i++){
//     if(s[i] === 'p'){
//       p++;
//     } else if(s[i] === 'y'){
//       y++;
//     }
//   }
//   if(p === y){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(numPY('pPoooyY')); // true
// console.log(numPY('Pyy'));     // false
// console.log(numPY('ab'));      // true
// console.log(numPY(''));        // true
// console.log(numPY());          // true



// 7. 이상한 문자만들기
// toWeirdCase함수는 문자열 s를 매개변수로 입력받는다. 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 
// 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라. 
//예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO', 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.
// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

function toWeirdCase(s) {
  var newArr = s.split(' '); // s를 배열로 만들어 각 문자열을 split 한다.
  var str = ''; // 배열을 나눈 값을 넣는다.
  for(var i = 0; i < newArr.length; i++){
   for(var j = 0; j < newArr[i].length; j++){ // 배열 i번째 인수의 길이 반환.
     if(j % 2 === 0){ // 나눠진 배열을 다시 for문으로 돌려서 합치기 위해. + 조건 맞추기.
       str += newArr[i][j].toUpperCase();
     }
     else{
       str += newArr[i][j].toLowerCase();
     }
   }
   newArr[i] = str; // str에 값을 다시 넣어주고.
   str = ''; // 다시 빈 문자열로 만들어 초기화 해야 다른 배열값을 넣을 수 있음.
  }
  return newArr.join(' '); //배열값 합치기.
}
console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE