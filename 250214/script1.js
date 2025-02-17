const newBook = {
  title: "Javascript",
  page: 360,
  price: 32000,
  author: "이성일",
  published: "2025-04-22",
  question: function () {
    console.log(`${this.author}의 따끈한 신간 도서입니다.`);
  },
};

// 생성자 함수로 5만개 데이터 추가
function Book(title, page, price, author, published) {
  this.title = title;
  this.page = page;
  this.price = price;
  this.author = author;
  this.published = published;
  this.question = function () {
    console.log(`${this.author}님의 따끈한 신간 도서 입니다.`);
  };
}
// console.log(Book);

const totalBook = new Book("JavaScript", 360, 32000, "이성일", "2025-03-22");

console.log(totalBook);
totalBook.question();
