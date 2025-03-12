// anime 기본문법
anime({
  targets: "ul.menu li",
  translateX: 250,
  easing: "linear",
  loop: true,
  direction: "alternate",
  delay: anime.stagger(100), //시차 개념
  endDelay: anime.stagger(100),
});
