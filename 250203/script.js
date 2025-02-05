const fruitItems = document.querySelector("#items");

const displayfruit = () => {
  let selectedText = fruitItems.options[fruitItems.selectedIndex].innerText;
  alert(`[${selectedText}]를 선택했습니다!`);
};

// 모든 라디오버튼 가져오기
const rbs = document.querySelectorAll('input[type="radio"]');

// 찾아온 라디오버튼에 이벤트
rbs.forEach((radio) => {
  radio.addEventListener("change", function () {
    // 사용자가 선택한 라디오버튼 값에 alert 출력
    alert(`${this.nextSibling.textContent.trim()}을 선택했습니다!`);
  });
});

fruitItems.addEventListener("change", displayfruit);
