// for (let i = 1; i <= 10; i++) {
//   if (i === 6) break;
//   document.write(i, "<br />");
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) continue;
//   document.write(i, "<br />");
// }

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 2; j++) {
//     document.write(`${i}행 ${j}열`, "<br />");
//   }
//   document.write("<br />");
// }

const marvels = ["ironman", "hulk", "captin", "stranger"];
marvels.forEach(function (marvel, index, array) {
  console.log(marvel, index, array);
});
