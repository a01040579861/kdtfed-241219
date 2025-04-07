// 변수 안에 담을 수 있는 값 => 자료형

// 1) 원시타입 = Primitive type
// number = 숫자
// string = 문자열
// boolean = 논리형
// truthy한 값

// > Template Literal => 변수와 문자열을 동시에 사용하고자할 때, 굳이 번거롭게 연산자를 사용하지 않을 수 있도록 만들어놓은 문법
// undefined = 미정
// > falsy한 값

// null = "유효하지 않다!"라는 값을 갖고 있음
// > 아예 값을 주지 않은 것을 정의하고 할 때

// symbol = 유일무이한 값

// 2) 참조타입 = Reference type
// array = 배열
// object = 객체
// function = 함수

// regexp = 정규표현식
// Map = 맵데이터
// Set = 셋데이터

const num = 7;
const str = "7";
const bool = true;
const bool02 = false;

// const age = prompt("당신의 나이를 입력하세요");
// console.log(age);
// console.log(typeof age);

console.log(typeof bool);
console.log(typeof bool02);

const userName = "현빈";
const movieTitle = "하얼빈";

// const reult = userName + "배우가 출연한 최근 영화는 " + movieTitle + " 입니다.";

const reult = `${userName} 배우가 출연한 최근 영화는 ${movieTitle} 입니다.`;

console.log(reult);

let hobby;

console.log(hobby);

let weekend = null;
console.log(weekend);

const only01 = Symbol();
const only02 = Symbol();

console.log(only01 === only02);

let id = Symbol();

const member365 = {
  name: "Jack",
  [id]: "ezen",
};

console.log(member365);

const arr = [1, 2, 3];
const strArr = ["park", "kim", "lee"];
const boolArr = [true, false];

console.log(arr);
console.log(`${arr[0]}은 arr배열의 ${arr.indexOf(arr[0]) + 1}번째 값입니다.`);
console.log(typeof arr);

arr[3] = 7;

console.log(arr);

// 자바스크립트의 중급자 실력 갖추는데 있어서 요구조건 => iterable 객체 & 반복문을 누가 더 자유자재로 사용가능한가?

const obj = {
  firstNumer: 1,
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

// 온점표기법
console.log(frontendClass.tutor);

// 대괄호표기법
console.log(frontendClass["students"]);

frontendClass.attitude = "the best";

console.log(frontendClass);

// function = 기능

// 원래 초창기에 JS 함수 구현

// 선언 & 호출!!
function hello() {
  console.log("Hello World!");
}

console.log(typeof hello);
