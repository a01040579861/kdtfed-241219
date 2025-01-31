/* 내 풀이코드 */
const toggleBtn = document.querySelector("button");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    toggleBtn.innerText = "다크모드";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.border = "1px solid #ccc";
    toggleBtn.style.borderRadius = "8px";
    toggleBtn.style.padding = "5px 10px";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    toggleBtn.innerText = "라이트모드";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.border = "1px solid #ccc";
    toggleBtn.style.borderRadius = "8px";
    toggleBtn.style.padding = "5px 10px";
  }
});

/* 선생님 풀이코드 */
/* scss body안에 &.dark 클래스안에 속성값을 부여하고 진행 */
// const toggleBtn = document.querySelector("button");
// toggleBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   if (!document.body.classList.contains("dark")) {
//     toggleBtn.innerText = "다크모드";
//   } else {
//     toggleBtn.innerText = "라이트모드";
//   }
// });
