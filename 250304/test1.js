const fetchUsers = async () => {
  const userList = document.querySelector("#users");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("서버 응답 실패");

    const users = await response.json();

    sessionStorage.setItem("users", JSON.stringify(users));

    view(users);
  } catch (error) {
    console.error("API 요청 오류:", error);

    const savedData = sessionStorage.getItem("users");
    if (savedData) {
      view(JSON.parse(savedData));
    } else {
      userList.innerHTML = "데이터를 불러올 수 없습니다.";
    }
  }
};

const view = (users) => {
  const userList = document.querySelector("#users");

  userList.innerHTML = users
    .map(
      ({ username, name, email }) => `
          <table class="user-table">
              <tr><td><strong>이름</strong></td><td>${name}</td></tr>
              <tr><td><strong>아이디</strong></td><td>${username}</td></tr>
              <tr><td><strong>이메일</strong></td><td>${email}</td></tr>
          </table>
      `
    )
    .join("");
};

fetchUsers();
