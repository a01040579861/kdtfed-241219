/* 함수 선언식 */
// function sum(a, b) {
//   return a + b;
// }

// sum(10, 20);

// const num = function (a, b) {
//   return a + b;
// };

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   console.log("클릭!");
//   return () => {
//     console.log("클릭! 클릭!");
//     return () => {
//       console.log("클클..클! 릭!");
//       return () => {
//         console.log("클릭 고마 해라");
//       };
//     };
//   };
// });

// const showData = (name, age) => {
//   alert(`안녕하세요! ${name} 님! 나이가 ${age}살 이시군요!`);
// };
// const getData = (callback) => {
//   const userName = prompt("이름을 입력하세요!");
//   const userAge = prompt("나이를 입력하세요!");
//   callback(userName, userAge);
// };
// getData(showData);

/* 
JS 언어 => 함수 
1. 변수에 함수를 담을 수 있음: 원래는 전통적으로 함수 선언식으로만 함수를 호출 했었는데, 
   익명함수가 등장하면서 함수를 보다 편리하게 작성할 수 있게 됨
2. 다른 함수의 매개변수로 등장할 수 있음: 콜백함수라는 스타일 형식을 창조해낼 수 있게 됨
3. 다른 함수의 반환값(*return)으로 함수가 등장할 수 있음

*/
