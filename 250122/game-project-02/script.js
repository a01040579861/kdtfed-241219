const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".you-choice");
const winner = document.querySelector(".result");

const result = ["✌", "👊", "🖐"];
let message;

const show = (user, computer, message) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) {
    message = "무승부";
  } else {
    switch (user + computer) {
      case "✌🖐":
      case "👊✌":
      case "🖐👊":
        message = "사용자 승리!";
        break;
      case "✌👊":
      case "👊🖐":
      case "🖐✌":
        message = "컴퓨터 승리!";
        break;
    }
  }

  show(user, computer, message);
};

const play = (event) => {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
