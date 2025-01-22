// [1,3,5,7,9,11,13,15,17,19]
// 10보다 큰 값만 찾아서 콘솔창에 출력
// 조건문 반복문을 활용해서

// 내 풀이 코드
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    console.log(arr[i]);
  }
}

// 선생님 풀이 코드
// const arrs = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// arrs.forEach((arr) => {
//   if (arr > 10) console.log(arr);
// });
