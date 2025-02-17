const book1 = {
  title: "JavaScript",
  pages: 648,
  buy: function () {
    console.log("I did buy this book");
  },
};

const keys = Object.keys(book1);
const values = Object.values(book1);
const entries = Object.entries(book1);
console.log(entries);
