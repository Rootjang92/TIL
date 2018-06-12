// 재귀함수 예제
// 순차 곱셈. 1*2*3 * ...n값을 계산하도록.

function factorial(num){
  // 수가 0보다 작으면 그냥 거부.
  if (num < 0){
    return -1;
  }
  // 수는 0부터 시작, 0일 때 팩토리얼은 1.
  else if (num === 0){
    return 1;
  }
  // 다시 수 규칙은 숫자 * 팩토리얼(숫자 -1)
  // 자기 자신을 함수 안에서 다시 호출해서 사용.
  else{
    return (num * factorial(num - 1));
  }
}
// 결과값.
var result = factorial(8);
console.log(result) // 40320

