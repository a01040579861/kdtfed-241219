/* music click event */
let currentAudio = null; // 현재 재생 중인 오디오 저장

document.querySelectorAll(".music-item").forEach((item) => {
  item.addEventListener("click", function () {
    let audio = this.querySelector("audio"); // 해당 리스트의 오디오 가져오기

    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause(); // 기존 재생 중인 노래 멈춤
      currentAudio.currentTime = 0; // 처음부터 다시 시작하도록 설정
    }

    if (audio.paused) {
      audio.play();
      currentAudio = audio; // 현재 재생 중인 오디오 업데이트
    } else {
      audio.pause();
      currentAudio = null; // 멈추면 현재 오디오 해제
    }
  });
});

/* check box all */
document.addEventListener("DOMContentLoaded", () => {
  const selectAllCheckbox = document.querySelector("#select-all");
  const songCheckboxes = document.querySelectorAll(".song-checkbox");

  selectAllCheckbox?.addEventListener("change", (event) => {
    songCheckboxes.forEach((checkbox) => {
      checkbox.checked = event.target.checked;
    });
  });
});

// const songs = document.querySelectorAll(".albumTable-song");
// let currentAudio = null;

// songs.forEach((song) => {
//   const playBtn = song.querySelector(".fa-caret-right");
//   const pauseBtn = song.querySelector(".fa-pause");

//   playBtn.addEventListener("click", (e) => {
//     const audio = e.target.closest("td").querySelector("audio");

//     if (currentAudio && currentAudio !== audio) {
//       currentAudio.pause();
//     }
//     audio.play();
//     currentAudio = audio;
//   });

//   pauseBtn.addEventListener("click", (e) => {
//     const audio = e.target.closest("td").querySelector("audio");
//     audio.pause();

//     if (currentAudio === audio) {
//       currentAudio = null;
//     }
//   });
// });
