// 시간과 관련있는 JS 내장함수 시리즈
/* 
일정시간마다 반복하는 함수 = setInterval()
*/
/*
const hello = () => {
  console.log("Hello World!");
};

setInterval(hello, 3000);
*/
// 밀리초 => 1초 = 1000밀리초
/*
반복적인 실행을 멈추게 하는 함수 = clearInterval()
*/
/* let counter = 0;

 let timer = setInterval(() => {
   console.log("Hello World!");
   counter++;

   if (counter === 5) {
     clearInterval(timer);
   }
 }, 2000);*/

/*
특정시간 경과 후 무언가를 실행시키게 하는 함수 = setTimeout()
*/

setTimeout(() => {
  console.log("안녕하세요!");
}, 3000);
