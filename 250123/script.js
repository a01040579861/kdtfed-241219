//  매서드 함수 = 방법 (론)

// const num = parseInt(prompt("더하고 싶은 숫자를 입력하세요!"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더한 결과값은 ${sum} 입니다.`);
// }
// calcSum(10);

// console.log(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다.`);

// 매개변수는 함수의 선언부에서!
// function sum(a, b) {
//   const result = a + b;
//   console.log(result);
// }

// sum(10, 20);

// return문

// function multiple(a, b = 0, c = 0) {
//   return a + b + c;
// }
// console.log(multiple(2, 4, 8));
// console.log(multiple(2, 4));
// console.log(multiple(2));

// Scope = 범위
// 전역 스코프 = global scope

// var hi = "hello";

// function greeting() {
//   console.log(hi);
// }

// greeting();

/*전역 스코프 사용 사례 2*/

// var hi = "hello";
// console.log(hi);
// function greeting() {
//   hi = "bye";
//   console.log(hi);
// }
// greeting();

/* 전역 스코프 사용 사례 3 */
// function greeting() {
//   hi = "Hello";
// }

// greeting();

// console.log(hi);

/* 블록 스코프 */
const factor = 5;
function calc() {
  return num * factor;
}
{
  const num = 10;
  let result = calc();
  console.log(`result : ${result}`);
}
