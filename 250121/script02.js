// 사용자에게 12달 중 좋아하는 월의 정보를 입력받으세요. ex) 1 = 1월 / 7 => 7월

// 12월 ~ 2월 : 스키의 계절, 겨울을 좋아하시네요! 출력
// 3월 ~ 5월 : 책 읽기 좋은 봄을 좋아하시네요! 출력
// 6월 ~ 8월 : 여행가기 좋은 여름을 좋아하시네요! 출력
// 9월 ~ 11월 : 선선한 날씨인 가을을 좋아하시네요! 출력
// if조건문을 활용해서 위 코드를 출력!
// 가급적, 생성형 AI를 사용하지 않고 만들기
let favoriteMonth = prompt("좋아하는 월을 입력하세요!");

if (favoriteMonth !== "" || favoriteMonth !== null) {
  favoriteMonth = parseInt(favoriteMonth);
  if (3 <= favoriteMonth && favoriteMonth <= 5) {
    alert("책 읽기 좋은 봄을 좋아하시네요!!");
  } else if (6 <= favoriteMonth && favoriteMonth <= 8) {
    alert("여행가기 좋은 여름을 좋아하시네요!!");
  } else if (9 <= favoriteMonth && favoriteMonth <= 11) {
    alert("선선한 날씨인 가을을 좋아하시네요!!");
  } else if (isNaN(favoriteMonth) || 0 === favoriteMonth) {
    alert("정상적인 월을 입력해주세요!!");
  } else {
    alert("스키의 계절, 겨울을 좋아하시네요!!");
  }

  window.location.reload();
}
