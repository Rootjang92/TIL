// 문제1 : for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// for(var i = 0; i < 10; i +=2){
//   console.log(i);
// }

// 문제2 for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
// var str = '';
// for(var i = 0; i < 10; i++){
//   if (i % 2 === 0){
//     str += i;
// }
// }
// console.log(str);

// 문제3 for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

// for(var i = 9; i < 10; i--){
//   if (i % 2 === 1){
//     console.log(i);
//   }
// }

//문제4 while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.

// var i = 0;
// while(i < 10){
//   if(i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

//문제5. while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

// var i = 9;
// while(i < 10){
//   if(i % 2 === 1){
//     console.log(i);
//   }
//   i--;
// }

//문제6. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오

// var sum = 0;
// for(var i=0; i < 10; i++){
//   sum += i;
// }
// console.log(sum);


//문제7. 1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

// var sum = 0;
// for(var i = 1; i <= 20; i++){
//   if(i % 2 !== 0 && i % 3 !== 0){
//     sum += i;
//   }
// }
// console.log(sum);

//문제8. 1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

// var sum = 0;
// for(var i = 1; i <= 20; i++){
//   if(i % 2 === 0 || i % 3 === 0){
//     sum += i;
//   }
// }
// console.log(sum);


// 문제9. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.



// for(var i = 1; i <= 6; i++){
//   for(var j = 1; j <= 6; j++){
//     if(i + j === 6){
//       console.log([i,j]);
//     }
//   }
// }


//문제10. 다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 개행문자('\n')를 사용하여 개행한다. 
// 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.
// 높이(line)가 5

// function triangle(num){
// var result = '';

// var flower = '*';
// for(var i = 0; i < num; i++){
//   result += flower + '\n';
//   flower += '*';
// }
// return result;
// }
// console.log(triangle(5));

// 문제11. 트리 출력하기
// 다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 
// 개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

// function triangle(num){
// var result = '';

// var flower = '*';
// for(var i = 0; i < num; i++){
//   result += flower + '\n';
//   flower += '*';
// }
// return result;
// }
// console.log(triangle(3) + triangle(5));