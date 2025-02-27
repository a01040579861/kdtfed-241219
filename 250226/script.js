const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});

const newNumbers = numbers.map(
  (number, index, array) => number * 2 + index / array
);

console.log(newNumbers);

const scores = [90, 35, 64, 88, 45, 92];

const highScores = scores.filter((score) => {
  score >= 85;
});
console.log(highScores);

const names = ["kim", "park", "lee"];
const result = names.find((name) => {
  name === "park";
});

console.log(result);

const numbers01 = [1, 2, 3, 4, 5];
const result01 = numbers.reduce((total, current) => total + current, 0);

console.log(result01);
