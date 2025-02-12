const now = new Date();
const firstDay = new Date("2024-12-19");

const toNow = now.getTime();
const toFirst = firstDay.getTime();
const passedTime = toNow - toFirst;
const passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));

document.querySelector(".accent > span").innerText = `${passedDay} 일`;

const calcDate = (days) => {
  // 100일째 되는 날
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someDay = new Date(future);
  let year = someDay.getFullYear();
  let month = someDay.getMonth() + 1;
  let date = someDay.getDate();
  document.querySelector(
    "#date" + days
  ).innerText = `${year}년 ${month}월 ${date}일`;
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
