// 변수 안에 담을수 있는 값은 자료형이라 칭한다.

// 원시타입 = Primitive type
// number = 정수
// string = 문자열
// boolean = 논리형
// >template Literal => 변수와 문자열을 동시에 사용하고자할 때, 굳이 번거롭게 연산자를 사용하지 않을수 있도록 만들어 놓은 문법

// undefiend = 미정
// > falsy 한 값

// null = 유효하지 않은 값
// > 아예 값을 주지 않은 것을 정의하고자 할 때,

// symbol = 유일무이한 값
// Symbol()

// 참조타입 = Reference type
// array = 배열
// function = 함수
// object = 객체

// regexp = 정규표현식
// Map = 맵 데이터
// Set = 셋 데이터

const num = 7; // 숫자
const str = "7"; // 문자
const bool = true; // 참 & 거짓
const bool02 = false; // 참 & 거짓

// const age = prompt("당신의 나이를 입력하세요!");
// console.log(age);
// console.log(typeof age);
console.log(typeof bool);
console.log(typeof bool02);

const userName = "현빈";
const movieTitle = "하얼빈";

// const result =
//   userName + "배우가 출연한 최근 영화는 " + movieTitle + " 입니다.";

// template Literal 문법
const result = `${userName} 배우가 출연한 최근 영화는 ${movieTitle} 입니다.`;
console.log(result);

let hobby;
console.log(hobby);

let weekend = null;
console.log(weekend);

// only 변수에 유일무이한 값 선언
const only01 = Symbol();
const only02 = Symbol();

console.log(only01 === only02);

let id = Symbol();

const member365 = {
  name: "Jack",
  [id]: "Ezen",
};

console.log(member365);

// array 배열 = []
let arr = [1, 2, 3];
const strArr = ["park", "kim", "Lee"];
const boolArr = [true, false];

console.log(arr);
console.log(`${arr[0]}은 arr배열의 ${arr.length - 2}번째 값입니다.`);
console.log(typeof arr);

arr[3] = 7;
console.log(arr);
console.log(`${arr[4]}은 arr배열`);

// JS 중급자 실력을 갖추는데 있는 요구조건
// - iterable 객체 & 반복문 을 누가 더 자유자재로 사용가능한가?

// 객체 Object = {}
const obj = {
  firstNumber: 1,
  secondNumber: 2,
  finalNumber: 3,
};

const frontendClass = {
  tutor: "David",
  students: 16,
  major: "language",
};

// 객체의 형태는
// (key: value) => 한 쌍의 property = 속성
// html을 사용할 때 => a href => attribute

// 온점 표기법
console.log(frontendClass.tutor);

// 대괄호 표기법
console.log(frontendClass["students"]);

// 점 표기법
frontendClass.attribute = "the best";

console.log(frontendClass);

// function = 기능
// 초장기 JS 함수 구현 방법
function hello() {
  console.log("Hello World!");
}

console.log(typeof hello);
