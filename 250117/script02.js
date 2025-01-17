// let a = 10;
// let b = a;

// let obj1 = {
//   c: 10,
//   d: "ddd",
// };
// let obj2 = obj1;

// b = 30;
// obj2.c = 20;

// console.log(a, b);
// console.log(obj1, obj2);
// 변수를 값을 담을 수 있는 그릇으로 생각
// 단순히 이렇게만 생각하면 X

// CS
// 피그마 => fff // 000
/* 컴퓨터 => 사람 입력 데이터를 처리하는 방식 
=> 0, 1 2개의 숫자만 가지고 데이터 처리 */
// 바이너리 코드
// 메모리 공간 => 가장 최소 단위 : 비트
// 고사양의 데이터를 처리하려면 너무 많은 비트를
// 사용해야하다보니 컴퓨터 비효율적인 로딩 요구

// 비트 => 바이트 => 8개의 비트

// 변수 선언 => 숫자형 타입 값을 할당 => 대략적 64비트의 값

// 객체, 배열

// 전통적인 프로그래밍언어 => 굳이 비효율적으로 낭비될 수 있는 메모리 공간을
// 생성하지 않기 위해서 JAVA,C 언어는 이터러블 한 객체를 생성할 때 , 애초에
// 해당 객체에 얼만큼의 값을 넣을지를 정의

// JS => 배열(자료구조) => 5개? 10개

// 굉장히 타이트하게 기본값을 설정해놓고, 만약 그 타이트한 값을 초과해서 메모리를
// 사용하고자 할 때마다  값을 추가 시켜주거나

// const arr = [1, 2, 3];
// 애초에 값을 굉장히 큰 범위로 만들어 놓고, 개발자가 어떤 범위, 용량의 값을
// 적용하더라도 문제가 없도록 하거나

// 함수
let user = {
  name: "David",
  gander: "male",
};

function copyObject(target) {
  let result = {};
  for (let props in target) {
    result[props] = target[props];
  }
  return result;
}

const user2 = copyObject(user);
user2.name = "Jane";

console.log(user.name, user2.name);

// Spread Operator(전개연산자 구문)
const fruits = ["apple", "banana", "cherry"];

// 얕은복사
// const favorit = fruits;

// 깊은복사
const favorit = [...fruits];

favorit[1] = "grape";
console.log(fruits, favorit);
