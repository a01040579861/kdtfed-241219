const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];

// slide
const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");

// slide video
const newVideo = document.createElement("video");
const srcVideo = document.createAttribute("src");
const autoVideo = document.createAttribute("autoplay");
const mutedVideo = document.createAttribute("muted");
const loopVideo = document.createAttribute("loop");

srcVideo.value = `./videos/${videos[0]}`;
// newVideo 안에 srcVideo를 적용
newVideo.setAttributeNode(srcVideo);
newVideo.setAttributeNode(autoVideo, mutedVideo, loopVideo);

container.appendChild(newVideo);

newVideo.addEventListener("click", function () {
  if (this.paused) this.play();
  else this.pause();
});

// Video array loop
let i = 0;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "next") {
      i--;
      if (i < 0) i = videos.length - 1; // 첫번째 영상에서 prev버튼 누르면 마지막으로
    } else if (e.target.id === "prev") {
      i++;
      if (i >= videos.length) i = 0; // 마지막 영상에서 next버튼 누르면 첫번째로
    }
    srcVideo.value = `./videos/${videos[i]}`;
  });
});

/* 
script css 속성 부여
const widthVideo = document.createAttribute("widht");
const heightVideo = document.createAttribute("height");

widthVideo.value = "700";
heightVideo.value = "400";
newVideo.setAttributeNode(widthVideo);
newVideo.setAttributeNode(heightVideo);
*/
