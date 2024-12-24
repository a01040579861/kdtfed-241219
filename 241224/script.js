const form = document.querySelector("form");
const word = form.querySelector("#word");
const h1 = document.querySelector("h1");
console.log(form);

h1.style.color = "#03c75a";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userValue = word.value;
  console.log(userValue);
});
