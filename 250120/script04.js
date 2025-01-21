// JS code가 작성 혹은 생성 => 컴퓨터 메모리 공간 객체 생성 => 실행 컨텍스트 = execution context
// 실행 컨텍스트 = execution context : 개발자가 현재 작성 혹은 생성 변수(식별자)가 어떤 것 인지,
// 실행시켜야 하는 함수는 무엇인지 등등의 정보를 저장해놓고 있음!!

// execution context => 어떤 코드를 먼저 실행해야 하는가에 대한 우선순위를 결정하기 위한 목적

// 컴퓨터 > JS 어떤 곳에서 어떤 방식으로 실행되는지 이해하기!

// 컴퓨터 공간 > stack: 무언가를 쌓다. // Queue: 대기열
// 엘리베이터 => stack(스택구조) <-> 큐(Queue)
// 10층에 먼저 기다리고 있던 사람이 먼저 엘리베이터 탑승
// 엘리베이터 뒤쪽 => 가장 나중에 엘리베이터에 탑승

// Call stack : JS의 명령문을 처리하는 공간
// VariableEnvironment : 환경변수 // 현재 실행 컨텍스트 내 변수명, 함수정보,
// 실행컨텍스트 내 특정함수가 호출 실행되는 순간 해당 함수를 스냅샷의 형태로 저장

// 스냅샷(Snapshot): 일시정지 사진

// Lexical: 사전적인, "사전"답사

// LexicalEnvironment : 초기에는 VariableEnvironment와 동일한 값으로 시작하지만,
// 특정 함수를 호출하면 해당 함수가 실시간 처리를 하고 있는 상태를 바로 반영을 해줌!

// environmentRecord : 현재 실행하고자 하는 코드들 내부에 저장되어있는 정보값을 가지고 있음

// outer-Environment : 현재 실행하고자 하는 코드들이 외부의 영향을 받고 있는지,
// 받고 있다면 누구의 영향을 받는지를 확인 할 수 있는 정보 값을 가지고 있음!!

// ThisBinding : 현재 변수 || 식별자가 가리켜야 하는 대상 객체가 누구인지에 대한 정보값을 가지고 있음

// let a = 1;
// function outer() {
//   function inner() {
//     console.log(a);
//     a = 3;
//   }
//   inner();
//   console.log(a);
// }

// outer();
// console.log(a);

// function a() {
//   let x = 1;
//   console.log(x);
//   x;
//   console.log(x);
//   x = 2;
//   console.log(x);
// }
// a();

// Hoisting (호이스팅) : 무언가를 끌어올리다.

// function a() {
//   let x;
//   x;

//   x = 1;
//   console.log(x);
//   console.log(x);
//   x = 2;
//   console.log(x);
// }
// a();

// function a() {
//   let b;
//   b = function b() {};

//   console.log(b);
//   b = "bbb";
//   console.log(b);
//   console.log(b);
// }
// a();
