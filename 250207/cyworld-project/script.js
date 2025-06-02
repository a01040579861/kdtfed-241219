/* click change event */
const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const menuPhoto = document.querySelector("#menuPhoto");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color: #000";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuJukebox.style = "background: #55b2e4; color: #fff";
  menuPhoto.style = "background: #55b2e4; color: #fff";
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuGame.style = "background: #fff; color: #000";
  menuHome.style = "background: #55b2e4; color: #fff";
  menuJukebox.style = "background: #55b2e4; color: #fff";
  menuPhoto.style = "background: #55b2e4; color: #fff";
};
const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuJukebox.style = "background: #fff; color: #000";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuHome.style = "background: #55b2e4; color: #fff";
  menuPhoto.style = "background: #55b2e4; color: #fff";
};
const diaryChange = () => {
  contentFrame.setAttribute("src", "./photo.html");
  menuPhoto.style = "background: #fff; color: #000";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuHome.style = "background: #55b2e4; color: #fff";
  menuJukebox.style = "background: #55b2e4; color: #fff";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);
menuPhoto.addEventListener("click", diaryChange);

/* count event */
const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = "0" + (date.getMonth() + 1);
  const day = "0" + date.getDay();

  return `${year}-${month}-${day}`;
};

const todayDate = getFormattedDate();
const dailyCookiName = `pageHit_${todayDate}`;

const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 1);
const expireDateString = expireDate.toGMTString();

const cookieVal = (cookieName) => {
  const thisCookie = document.cookie.split("; ");
  for (let i = 0; i < thisCookie.length; i++) {
    if (cookieName === thisCookie[i].split("=")[0]) {
      return thisCookie[i].split("=")[1];
    }
  }
  return 0;
};

// 하루 방문자 체크
let dailyHitCt = parseInt(cookieVal(dailyCookiName));
if (isNaN(dailyHitCt)) {
  dailyHitCt = 0;
}
dailyHitCt++;
document.cookie = `${dailyCookiName}=${dailyHitCt}; expires=${expireDateString}`;

let totalHitCt = parseInt(cookieVal("totalPageHit"));
if (isNaN(totalHitCt)) {
  totalHitCt = 0;
}
totalHitCt++;
document.cookie = `totalPageHit=${totalHitCt}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
document.querySelector(".zero").innerText = dailyHitCt;
document.querySelector(".total").innerText = totalHitCt;

/* home music bar */
// 전역 변수 추가
let currentAudio = null; // 현재 재생 중인 오디오 저장 (배경음악 공유)

// 홈 배경음악 정지 함수
const stopHomeMusic = () => {
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.querySelector("#audioPlayer");
  const playBtn = document.querySelector("#play");
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");
  const volumeControl = document.querySelector("#volume");
  const progressBar = document.querySelector(".progress-bar");
  const progress = document.querySelector(".progress");

  const playlist = [
    "./contents/change.mp3",
    "./contents/goodperson.mp3",
    "./contents/iucidity.mp3",
    "./contents/1year.mp3",
  ];
  let currentTrack = 0;

  const loadTrack = (i) => {
    stopHomeMusic(); // 기존 음악 정지
    currentTrack = (i + playlist.length) % playlist.length;
    audioPlayer.src = playlist[currentTrack];
    audioPlayer.play();
    currentAudio = audioPlayer; // 현재 오디오 설정
    updatePlayButton(true);
  };

  const updatePlayButton = (isPlaying) => {
    playBtn.classList.toggle("fa-play", !isPlaying);
    playBtn.classList.toggle("fa-pause", isPlaying);
  };

  const togglePlay = () => {
    if (audioPlayer.paused) {
      stopHomeMusic(); // 기존 음악 정지
      audioPlayer.play();
      currentAudio = audioPlayer; // 현재 오디오 설정
    } else {
      audioPlayer.pause();
    }
    updatePlayButton(!audioPlayer.paused);
  };

  const updateProgressBar = () => {
    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.style.width = `${percentage}%`;
  };

  const seekAudio = (e) => {
    const clickX = e.offsetX;
    const width = progressBar.clientWidth;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
  };

  playBtn.addEventListener("click", togglePlay);
  prevBtn.addEventListener("click", () => loadTrack(currentTrack - 1));
  nextBtn.addEventListener("click", () => loadTrack(currentTrack + 1));

  volumeControl.addEventListener("input", (e) => {
    audioPlayer.volume = e.target.value;
  });

  progressBar.addEventListener("click", seekAudio);
  audioPlayer.addEventListener("timeupdate", updateProgressBar);
  audioPlayer.addEventListener("ended", () => loadTrack(currentTrack + 1));

  loadTrack(currentTrack); // 초기 설정
});
