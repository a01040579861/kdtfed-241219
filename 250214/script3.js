// 사용자에게 지름 & 높이의 값을 입력 받아 원기둥의 부피를 구하는 프로그램 코드를 작성하기

// 원기둥 부피 구하는 공식 = 밑 면적 x 높이
// 밑면적 = Math.PI * R * R
// Radius = 반지름

// 어떤 원기둥을 예상하더라도 해당 결과값이 출력될 수 있도록 생성자 함수를 활용해서 코드를 구현

// const btn = document.querySelector("input[type='button']");
// const result = document.querySelector("#result");

// // 생성자 함수
// function Cylinder(diameter, height) {
//   this.diameter = diameter;
//   this.height = height;

//   this.getVolume = function () {
//     const radius = this.diameter / 2;
//     return Math.PI * radius * radius * this.height;
//   };
// }

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const diameter = parseFloat(document.querySelector("#cyl-biameter").value);
//   const height = parseFloat(document.querySelector("#cyl-height").value);

//   if (diameter === "" || height === "") {
//     result.innerText = "지름과 높이를 제대로 적어라";
//     return;
//   }

//   const cylinder = new Cylinder(diameter, height);
//   const volume = cylinder.getVolume().toFixed(2);

//   result.innerText = `원기둥 부피는 ${volume}㎤`;
// });

const result = document.querySelector("#result");
const button = document.querySelector("input[type='button']");

function Cylinder(cylinderDiameter, cylinderHeight) {
  this.diameter = cylinderDiameter;
  this.height = cylinderHeight;
  this.getVolume = function () {
    const radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  };
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  const diameter = document.querySelector("#cyl-biameter").value;
  const height = document.querySelector("#cyl-height").value;

  if (diameter === "" || height === "") {
    result.innerText = "지름과 높이의 값을 입력해주세요.";
  } else {
    const cylinder = new Cylinder(parseFloat(diameter), parseFloat(height));
    console.log(cylinder);
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}㎤`;
  }
});
