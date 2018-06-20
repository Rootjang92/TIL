// string length

var str = 'Hello';
console.log(str.length) // 5

str = "안녕하세요";
console.log(str.length) // 5


// string method

// string.prototype.charAt()
// 매개변수로 전달한 index 번호에 해당하는 위치의 문자를 반환.

var str = 'hello';

console.log(str.charAt(0)); 
console.log(str.charAt(1)); 
console.log(str.charAt(2)); 
console.log(str.charAt(3)); 
console.log(str.charAt(4)); 
console.log(str.charAt(5)); 

// index 범위 벗어나면 빈 문자열 반환.

for (var i = 0; i < str.length; i++){
  console.log(str.charAt(i));
}

// string.prototype.indexOf()
// 매개변수로 전달된 문자 또는 문자열은 대상 문자열에서 검색하여 처음 발견된 곳의 index를 반환.

// var str = 'Hello World'
// console.log(str.indexOf('l'));
// console.log(str.indexOf('or' , 8));
// 발견하지 못할 경우 -1 반환.

// string.prototype.lastindexOf()
// 마지막으로 발견된 곳의 index반환.

var str = 'Hello World'

console.log(str.lastIndexOf('World'));
console.log(str.lastIndexOf('o', 5));

// 2번째 인수가 전달되면 검색 시작 위치를 fromindex로 이동하여 역방향으로 검색.

// string.prototype.replace()

// 첫번째 인자에 전달된 문자열 또는 정규표현식을 대상 문자열에서 검색하여 두번째 인자에 전달된 문자열로 대체한다.
// 원본 문자열은 변경되지 않고 결과가 반영된 새로운 문자열은 반환한다.

var str = 'Hello Hello';
var replacedStr = str.replace('Hello', 'Lee');
console.log(replacedStr);
console.log(str);
replacedStr = str.replace(/hello/gi, 'Lee');
// 정규표현식 검색 i(대소문자 구볉x) g(문자열 내 모든 패턴 검색)
console.log(replacedStr);
console.log(str);

// string.prototype.split()

// 첫번째 인자에 전달된 문자열 또는 정규표현식을 대상 문자열에서 검색하여 문자열을 구분한 후 
// 분리된 각 문자열로 이루어진 배열을 반환. 원본 문자열은 그대로.
// 인수가 없는 경우, 대상 문자열 전체를 단일 요소로 하는 배열을 반환.

var str = 'How are you doing?';
var splitStr = str.split(' ');
console.log(splitStr);
console.log(str);
splitStr = str.split();
console.log(splitStr);
splitStr = str.split('');
console.log(splitStr);
// 'o'로 구분.
splitStr = str.split('o');
console.log(splitStr);

// string.prototype.substring()
// index에 해당하는 문자부터 두번째 인자에 전달된 index에 해당하는 문자의 바로 이전 문자까지를 모두 반환한다.
// 첫번째 인수 < 두번째 인수 관계 성립.
// 첫번째 인수 > 두번째 인수 : 두 인수는 교환.
// 두번째 인수 생략 : 해당 문자열 끝까지 반환.
// 인수 < 0 또는 NaN인 경우 : 0으로 취급.
// 인수 > 문자열 길이 : 인수는 문자열 길이로 취급.

var str = 'Hello World';
var res = str.substring(1, 4);
console.log(res);
res = str.substring(4, 1);
console.log(res);
res = str.substring(4);
console.log(res);
res = str.substring(-2);
console.log(res);
res = str.substring(1, 12);
console.log(res);
res = str.substring(20);
console.log(res);

