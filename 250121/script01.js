// const userInput = prompt("이름을 입력하세요!");
// console.log(typeof userInput);

// 조건문을 실행하기에 앞서 조건식 자체가 성립될 수 없는 값이 들어온다면,
// 더 이상의 조건문을 실행시키지 않는 조치 !! => 메모리 효율적

// 예외조항처리

// if (userInput === "" || userInput === null) console.log("값이 없는디?");
// else alert(`${userInput}님 좋은 아침이에요!😊`);

// 중첩 if 조건문
// const score = prompt("내 인생 점수!!✔");

// if (score !== "" || score !== null) {
//   if (Number(score) >= 90) alert(`${score}점 나름 잘 살았다!😁`);
//   else if (Number(score) >= 80) alert(`${score}점 이정도면 괜찮아~😉`);
//   else alert(`${score}점 지금부터 열심히 해보자!👍`);
// }

// 짝수 & 홀수를 구분하는 if 조건문
// let userNum = prompt("숫자를 입력하세용~😉");

// if (userNum !== "" || userNum !== null) {
//   userNum = parseInt(userNum);
// if (userNum % 2 === 0) {
//   alert(`${userNum}는 짝수 입니다!😁`);
// } else {
//   alert(`${userNum}는 홀수 입니다!😂`);
// }
// 삼항 조건 연산문
//   userNum % 2 === 0
//     ? alert(`${userNum}는 짝수 입니다!😁`)
//     : alert(`${userNum}는 홀수 입니다!😂`);
// }

// switch 문

const webPage = prompt("네이버, 구글, 다음 중 즐겨하는 사이트는 어디인가요?");
let url;
switch (webPage) {
  case "네이버":
    url = "https://www.naver.com";
    break;
  case "구글":
    url = "https://www.google.com";
    break;
  case "다음":
    url = "https://www.daum.net";
    break;
  default:
    alert("잘못된 사이트 입니다.");
}
if (url) {
  window.location.href = url;
}
