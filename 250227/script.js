const bag = new Map();
bag.set("color", "red").set("price", "30000");

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

const myCupIte = myCup.keys();
console.log(myCup.keys());

const myCupIte02 = myCup.values();
console.log(myCup.values());

const myCupIte03 = myCup.entries();
console.log(myCup.entries());

myCupIte.forEach((item) => {
  console.log(item, typeof item);
});

myCupIte02.forEach((item) => {
  console.log(item, typeof item);
});

myCupIte03.forEach((item) => {
  console.log(item, typeof item);
});
