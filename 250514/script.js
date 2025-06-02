const loginForm = document.getElementById("loginForm");
const loginEvent = async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  /*
  REST FULL API METHOD 
  get: 클라이언트가 서버에게 어떤 값을 요청
  (*보안취약: 상단 주소창 쿼리값으로 기록 노출)
  
  post: 클라이언트가 서버에게 어떤 값을 기록
  (*)

  put: 클라이언트가 서버에 이미 기록되어 있는 데이터를 수정,편집
  delete: 클라이언트가 서버에 기록되어 있는 데이터를 삭제요청
  */
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.json();
  if (result.success) {
    alert("로그인 성공!");
  } else {
    alert("로그인 실패!");
  }
};

loginForm.addEventListener("submit", loginEvent);
