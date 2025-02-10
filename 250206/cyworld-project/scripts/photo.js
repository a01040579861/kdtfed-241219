document.querySelector("#openModal").addEventListener("click", () => {
  // 모달 생성
  const modal = document.createElement("div");
  modal.classList.add("modal");
  Object.assign(modal.style, {
    position: "fixed",
    zIndex: "1000",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  // 모달 내부 HTML 설정
  modal.innerHTML = `
      <div style="background: white; padding: 25px; width: 300px; text-align: center; border-radius: 10px; position: relative;">
          <button class="close" style="position: absolute; top: 10px; right: 10px; border: none; background: none; font-size: 20px; cursor: pointer;">&times;</button>
          <h3>사진 추가</h3>
          <input type="text" id="photoTitle" placeholder="게시물 제목" style="width: 250px; padding: 5px;"><br><br>
          <input type="text" id="photoUser" placeholder="죠지" style="width: 250px; padding: 5px;"><br><br>
          <input type="file" id="photoUpload"><br><br>
          <textarea id="photoDescription" placeholder="사진 설명을 입력하세요" style="width: 250px; height: 100px; resize: none;"></textarea><br><br>
          <button id="savePhoto">저장</button>
      </div>
  `;

  document.body.appendChild(modal);

  // 모달 닫기 이벤트
  modal
    .querySelector(".close")
    .addEventListener("click", () => modal.remove(), { once: true });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.remove();
  });

  // 저장 버튼 이벤트 등록
  document.querySelector("#savePhoto").addEventListener(
    "click",
    () => {
      const title = document.querySelector("#photoTitle").value.trim();
      const user = document.querySelector("#photoUser").value.trim();
      const fileInput = document.querySelector("#photoUpload");
      const description = document
        .querySelector("#photoDescription")
        .value.trim();
      const photoTable = document.querySelector(".photo-table tbody");

      if (!title) {
        alert("제목을 입력하세요!");
        return;
      }
      if (!user) {
        alert("사용자 이름을 입력하세요!");
        return;
      }
      if (fileInput.files.length === 0) {
        alert("사진을 업로드하세요!");
        return;
      }

      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <th>${title}</th>
          <td><a>${user}</a></td>
          <td><img src="${e.target.result}" alt="photo"></td>
          <td>${description}</td>
          <td><button class="photo-delete">삭제</button></td>
        `;

        photoTable.appendChild(newRow);

        // 로컬스토리지에 저장
        const photoData = {
          title: title,
          user: user,
          src: e.target.result,
          description: description,
        };
        let savedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
        savedPhotos.push(photoData);
        localStorage.setItem("photos", JSON.stringify(savedPhotos));

        modal.remove(); // 모달 닫기
      };
      reader.readAsDataURL(file);
    },
    { once: true }
  );
});

// 페이지 로드 시 기존 사진들 로드
window.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector(".photo-table tbody");
  const savedPhotos = JSON.parse(localStorage.getItem("photos")) || [];

  savedPhotos.forEach((photoData) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <th>${photoData.title}</th>
      <td><a>${photoData.user}</a></td>
      <td><img src="${photoData.src}" alt="photo"></td>
      <td>${photoData.description}</td>
      <td><button class="photo-delete">삭제</button></td>
    `;
    tbody.appendChild(newRow);
  });
});

// 삭제 기능 추가
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("photo-delete")) {
    const row = event.target.closest("tr");
    const imgSrc = row.querySelector("img").src;

    // 로컬스토리지에서 삭제
    let savedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    savedPhotos = savedPhotos.filter((photo) => photo.src !== imgSrc);
    localStorage.setItem("photos", JSON.stringify(savedPhotos));

    row.remove(); // 테이블에서 삭제
  }
});
