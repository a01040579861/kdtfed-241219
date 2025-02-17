// // 수업시간 코드
// const nums = document.querySelectorAll(".number");

// for (let i = 0; i < nums.length; i++) {
//   if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;

//   const angle = (i + 1) * (Math.PI / 6);
//   const x =
//     132 - nums[i].offsetWidth + 132 * Math.abs(Math.sin(angle).toFixed(2));
//   const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));

//   if (i + 1 > 6) {
//     nums[i].style.right = `${x}px`;
//   } else {
//     nums[i].style.left = `${x}px`;
//   }

//   if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3)) {
//     nums[i].style.top = `${y}px`;
//   } else {
//     nums[i].style.bottom = `${y}px`;
//   }
// }

// const hourPointer = document.querySelector("#hour");
// const minutePointer = document.querySelector("#minute");
// const secondPointer = document.querySelector("#second");

// const clock = () => {
//   const currentTime = new Date();

//   let second = currentTime.getSeconds();
//   let secondAngle = second * 6;
//   let secondAngleValue = `rotate(${secondAngle}deg)`;

//   let minute = currentTime.getMinutes();
//   let minuteAngle = minute * 6;
//   let minuteAngleValue = `rotate(${minuteAngle}deg)`;

//   let hours = currentTime.getHours();
//   let hoursAngle = hours * 30 + (minute / 60) * 30;
//   let hoursAngleValue = `rotate(${hoursAngle}deg)`;

//   secondPointer.style.transform = secondAngleValue;
//   minutePointer.style.transform = minuteAngleValue;
//   hourPointer.style.transform = hoursAngleValue;
// };

// setInterval(clock, 1000);

// 가독성 코드 (si)
const nums = document.querySelectorAll(".number");

nums.forEach((num, i) => {
  const index = i + 1;
  if (index % 3 === 0) return; // 3의 배수 건너뜀

  const angle = index * (Math.PI / 6);
  const x = 132 - num.offsetWidth + 132 * Math.abs(Math.sin(angle).toFixed(2));
  const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));

  num.style[index > 6 ? "right" : "left"] = `${x}px`;
  num.style[index >= 9 || index <= 3 ? "top" : "bottom"] = `${y}px`;
});

const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secondPointer = document.querySelector("#second");

const clock = () => {
  const now = new Date();

  const secondAngle = now.getSeconds() * 6;
  const minuteAngle = now.getMinutes() * 6;
  const hourAngle = now.getHours() * 30 + (now.getMinutes() / 60) * 30;

  secondPointer.style.transform = `rotate(${secondAngle}deg)`;
  minutePointer.style.transform = `rotate(${minuteAngle}deg)`;
  hourPointer.style.transform = `rotate(${hourAngle}deg)`;
};

setInterval(clock, 1000);
