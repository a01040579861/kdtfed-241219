// anime 기본문법
anime({
  targets: ".box1",
  translateX: 2000,
  duration: 500,
  easing: "easeOutElastic(1, .8)",
  background: "#000",
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
});
anime({
  targets: ".box2",
  translateX: 280,
  translateY: 1000,
  easing: "easeInOutBounce",
  delay: 1000,
});
anime({
  targets: ".box3",
  easing: "easeInElastic",
  translateX: {
    value: "1000px",
    duration: 1000,
    delay: 1000,
  },
  rotate: {
    value: 360,
    delay: 2000,
    duration: 3000,
  },
});
anime({
  targets: ".staggering-grid-demo .el",
  scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeInOutQuad", duration: 1200 },
  ],
  delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
});
