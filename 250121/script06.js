/* 
JS = 객체지향언어 | C, JAVA = 객체지향언어 => 어떠한 함수가 실행되고, 처리해야 할 자료가 발생되면 기본적으로 객체라는 자료구조의 형태로 변환해서 
관리, 저장,보관한다.
*/

/*
이러한 객체지향언어들은 거의 대부분 this 객체를 가지고 있으며, 어떤 함수 혹은
속성값이 실행되었을 때, 실행된 함수 및 속성의 주인이 누구인지를 효율적으로 
가리켜서 쉽게 찾아올 수 있게 해주는 역할!!
*/

/*
1. JS를 활용해서 함수선언 => 호출하는 순간 => "실행 컨텍스트 = 객체" 실행 된다.
2. "실행 컨텍스트" => Call stack 공간에서 가장 먼저 실행!
3. 그 다음 호출 된 함수가 그 위로 쌓이게 되는 구조!!
4. "실행 컨텍스트 = 객체" => 어떠한 정보로 구성되어 있는가?
5. 
VariableEnvironment (*환경변수)
- environmentRecord (* snapshot 형태): 
해당 함수가 가지고 있는 내부 함수 | 변수 등등 정보!!

- outerEnvironmentReference (* snapshot 형태):
해당 함수가 참조하고 있는 매개변수 || 인자값이 외부에서 들어온 경우, 
어느 경로에서 유입되었는지에 대한 전반적인 정보!!

LexicalEnvironment (*사전환경정보) 
- environmentRecord
- outerEnvironmentReference

ThisBinding (*this로 가리켜야 할 대상 누구인지의 정보)
*/

/*
Scope = 유효범위 
- 함수가 어디에서 어디까지를 커버해야하는지를 결정
scope Chain = 유효범위내 요소를 하나씩 차례대로 검색해 나가는 프로세스
- 현재 호출된 함수의 과거 선언 당시의 LexicalEnvironment 정보까지 참조!!
*/

//This의 식별방법?

/*
1. JS 내 전역공간에서 this는 무조건 전역 (모든 것을 커버할 수 있다.) 객체!!
> JS > 웹브라우저에서 사용하려고 만들어진 언어이다.> JS = window

2. Node.js > global(window)

*/
// const func = function (x) {
//   console.log(this, x);
// };
// func(1);

// const obj = {
//   method: func,
// };
// obj.method(2);

// 함수를 독립적으로 실행시킬 때에는 this는 전역객체인 window를 가르킨다.
// 반면, 함수가 특정 객체의 속성 메서드로 실행될 때에는 해당 객체를 가르킨다.

// 1. this를 호출하는 상황이 전역요소인지? 확인하기 window(전역)
// 2. 함수를 독립적으로 호출한 상황에서 this를 요청하여 확인하기 window(전역)
// 3. 특정개체 안에 있는 속성중 메서드를 활용해서 this를 요청하기 => 해당객체

// const obj = {
//   method: function (x) {
//     console.log(this, x);
//   },
// };

// obj.method(1);
// obj["method"](2);

// const obj = {
//   methodA: function () {
//     console.log(this);
//   },
//   inner: {
//     methodB: function () {
//       console.log(this);
//     },
//   },
// };
// obj.methodA();
// obj["methodA"]();

// obj.inner.methodB();
// obj.inner["methodB"]();
// obj["inner"]["methodB"]();
// obj["inner"].methodB();

// const obj1 = {
//   outer: function () {
//     console.log(this);
//     const innerFunc = function () {
//       console.log(this);
//     };
//     innerFunc();

//     const obj2 = {
//       innerMethod: innerFunc,
//     };
//     obj2.innerMethod();
//   },
// };
// obj1.outer();

// ES6 => 2015년
// 화살표 함수 => 기존 함수들의 실행컨텍스트와 한가지 엄청나게 큰 변화
// 실행컨텍스트 객체 => thisBinding

// const obj = {
//   outer: function () {
//     console.log(this);
//     const innerFunc = () => {
//       console.log(this);
//     };
//     innerFunc();
//   },
// };
// obj.outer();

// const array = [1, 2, 3, 4];

// array.forEach(function (num) {
//   console.log(this, num);
// });

// setTimeout(function () {
//   console.log(this);
// }, 300);

// document.body.innerHTML += "<button id='a'>클릭</button>";
// document.body.querySelector("#a").addEventListener("click", function () {
//   console.log(this);
// });

const obj1 = {
  outer: function () {
    console.log(this);
    const innerFunc1 = function () {
      console.log(this);
    };
    innerFunc1();

    const innerFunc2 = function () {
      console.log(this);
    };
    innerFunc2();

    const self = this;
    const innerFunc3 = function () {
      console.log(self);
    };
    innerFunc3();
  },
};
obj1.outer();
