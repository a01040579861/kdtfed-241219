/* word game */
const form = document.querySelector(".word-text > form");

const gameStart = (e) => {
  e.preventDefault();
  const word = document.querySelector("#word").innerText;
  const myWord = document.querySelector("#myword").value;

  const lastWord = word[word.length - 1];
  const firstWord = myWord[0];

  if (lastWord === firstWord) {
    document.querySelector("#result").innerText = "정답입니다!🥰";
    document.querySelector("#word").innerText = myWord;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다!🙄";
    document.querySelector("#myword").value = "";
  }
};

form.addEventListener("submit", gameStart);

/* lotto game */
const lottoButton = document.querySelector(".lotto-btn");
const result = document.querySelector(".game-lotto-number");
const luckNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const startLotto = () => {
  const { digitCount, maxNumber } = luckNumber;

  let myNumber = new Set();

  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "재추첨하겠습니다!🤑";
  }
};

lottoButton.addEventListener("click", startLotto);
