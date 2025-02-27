// regExp = reguler Expression = 정규표현식
// 문자열

// 1. 패턴 : 찾고자 하는 문자의 형식을 하나의 정형화된 형태로 정의
// 2. 플래그 : 위에서 정의한 패턴 값을 찾고자 할 때 추가적인 옵션을 적용할 수 있음.

// const regexp = /\d{3}/;
// console.log(typeof regexp);

// const regexp = new RegExp(/\d{3}/);

// console.log(regexp.test("Hello"));
// console.log(regexp.test("123"));

// 내장객체 > class 혹은 생성자 함수
// new 라는 예약어

// const str = "ES2025 is powerful";
// const patten = /ES2025/;

// console.log(str.match(/ES6/));
// console.log(str.match(patten));
// console.log(str.replace(patten, "Love"));

const str = "Love is Powerful";
const patten = /love/i;

console.log(patten.test(str));
