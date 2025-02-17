class Book {
  constructor(title, page, price, author, published) {
    this.title = title;
    this.page = page;
    this.price = price;
    this.author = author;
    this.published = published;
  }
  question() {
    console.log(`${this.author}님의 따끈한 신간 도서 입니다.`);
  }
}

const book1 = new Book("JavaScript", 360, 32000, "이성일", "2025-03-22");

console.log(book1);
book1.question();
