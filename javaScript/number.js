// 인자가 숫자로 반환될 수 없다면 NaN을 반환.

// Number.EPSILON
// js에서 표현할 수 있는 가장 작은 수.

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

function isEqual(a, b){
  return Math.abs(a - b) < Number.EPSILON;
}
console.log(isEqual(0.1 + 0.2, 0.3))


var num = 10;
num.MAX_VALUE;
console.log(Infinity > Number.MAX_VALUE);
// js에서 사용 가능한 가장 큰 숫자 반환.


//유한수 검사 -> 논리값

Number.isFinite(Infinity)
Number.isFinite(NaN)
Number.isFinite('Hello')

//정수검사 -> 논리값

Number.isInteger(123)
Number.isInteger('123')

//NaN값 -> 논리값

Number.isNaN(NaN)
Number.isNaN(undefined) // false

//안전한 정수값? -> 논리값

Number.isSafeInteger(123)

//지수 표기법 변환

var numObj = 77.1234;

console.log(numObj.toExponential());

//지정된 소숫점자리를 반올림하여 문자열로 반환.

var numObj = 12345.6789;
console.log(numObj.toFixed());

//매개변수로 지정된 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림

var numObj = 15345.6789;
console.log(numObj.toPrecision(1));

//기본자료형값 반환.
var numObj = new Number(10);
console.log(typeof numObj);

var num = numObj.valueOf();
console.log(num);
console.log(typeof num);