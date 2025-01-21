// 사용자의 로그인을 허락해주고자 한다.
// 사용자가 로그인을 하기 위한 정상적인 정보는 id = ezen1234, pw = 1234567 로 설정
// 사용자에게 ID와 PASSWORD를 받아서 정상적인 정보라면 "XX님 반갑습니다."라는 알림창이 나오게
// 만약 id가 잘못된 정보라면, "id가 일치하지 않습니다."라는 메세지를 알림창으로 전달하며
// 만약 pw가 잘못된 정보라면, "pw가 일치하지 않습니다."라는 메세지를 알림창으로 출력

// 내 풀이코드
const validId = "ezen1234";
const validPw = "1234567";

function login() {
  const userId = prompt("id를 입력하세요:");
  if (!userId) {
    alert("id를 입력하지 않았습니다.");
    location.reload();
  }
  if (userId !== validId) {
    alert("id가 일치하지 않습니다.");
    location.reload();
  }

  const userPw = prompt("pw를 입력하세요:");
  if (!userPw) {
    alert("pw를 입력하지 않았습니다.");
    location.reload();
  }
  if (userPw !== validPw) {
    alert("pw가 일치하지 않습니다.");
    location.reload();
  }
  alert(`${userId}님 반갑습니다.`);
}

// login();

// 선생님 풀이코드
/* server */
// const id = "ezne1234";
// const pw = "1234567";

/* client */
// const userName = prompt("당신의 이름을 입력하세요.");
// if (userName !== "" && userName !== null) {
//   const userId = prompt(`${userName}님 아이디를 입력하세요.`);
//   if (userId !== "" && userId !== null) {
//     if (userId === id) {
//       const userPw = prompt(`${userName}님 반갑습니다! 패스워드를 입력하세요!`);
//       if (userPw === pw) {
//         alert(`${userId}님 오늘도 좋은하루 되세요!😉`);
//       } else {
//         alert("패스워드가 일치하지 않습니다.");
//         location.reload();
//       }
//     } else {
//       alert("아이디가 일치하지 않습니다.");
//       location.reload();
//     }
//   } else {
//     alert("아이디를 입력하세요!");
//     location.reload();
//   }
// } else {
//   alert("정상적으로 아이디를 입력해주세요.");
//   location.reload();
// }
