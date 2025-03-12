const quotesURL = "https://dummyjson.com/quotes";

const result = document.querySelector("#result");

fetch(quotesURL)
  .then((response) => response.json())
  .then((data) => {
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerText = data.quotes[random].qoutes;
  })
  .catch(console.log);
