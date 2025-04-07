// 변수

// 자료형

// 자동 형변환

/*
const one = "20";
const two = 25;
const result = one - two;
console.log(typeof result);
*/

// 수동 형변환
// 숫자로의 형변환 : Number // parseInt / parseFloat
const str = parseFloat("20");
console.log(typeof str);

const num99 = "17.8";

console.log(Number(num99));
console.log(parseInt(num99));
console.log(parseFloat(num99));

console.log(Number(true));
console.log(parseInt(true));

// NaN = Not A Number

// toString() // String()

const num77 = 77;
console.log(typeof num77.toString());

// null & undefined => 문자열
console.log(typeof String(num77));

// 논리형boolean으로 형변환!!
// true || false

console.log(Boolean("Hello!"));
console.log(Boolean(undefined));

// 연산자 & 제어문
