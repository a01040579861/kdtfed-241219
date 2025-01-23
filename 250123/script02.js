// const fruits = ["Apple", "Banana", "grape"];
// console.log(fruits);

// ... : 전개연산자 구문
// spread operator

// console.log(...fruits);

// const addNum = (...numbers) => {
//   console.log(typeof numbers, numbers);
//   let sum = 0;
//   numbers.forEach((number) => {
//     sum += number;
//   });
//   return sum;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(addNum(1, 3, 5, 7));

const dislpayFavorites = (first, last, ...fruits) => {
  const str = `내가 가장 좋아하는 과일은 ${first}`;
  return str;
};
console.log(dislpayFavorites("사과", "포도", "토마토"));
