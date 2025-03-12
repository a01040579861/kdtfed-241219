const start = document.querySelector(".start");
const end = document.querySelector(".end");

const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피 주문?", "아메리카노");
  if (coffee !== null && coffee !== "") {
    start.innerText = `${coffee} 주문접수!`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다.");
  }
});
const display = (result) => {
  end.innerText = `${result} 준비 완료!`;
  end.classList.add("active");
  start.classList.add("done");
};

const showError = (error) => {
  console.log(error);
};

order.then(display).catch(showError);
