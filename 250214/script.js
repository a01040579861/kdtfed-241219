// let obj1 = new Object();

// console.log(typeof obj1);

// obj1.name = "seoung il";

// console.log(obj1);

// obj1["gender"] = "male";

// console.log(obj1);

// obj1.name = "Romeo";

// console.log(obj1);

// delete obj1.name;

// console.log(obj1);

const student = {
  name: "Julet",
  score: {
    history: 85,
    science: 94,
    // 콜백
    average: () => {
      return student.score.history + student.score.science;
    },
    // 익명
    average1: function () {
      return (this.history + this.science) / 2;
      // or console.log((this.history + this.science) / 2);
    },
  },
};

console.log(student.score.average());

const book3 = {
  title: "누구나 처음은 있다",
  page: 350,
  buy: function () {
    console.log("이 책을 구입했습니다.");
  },
};

book3.price = 20000;

console.log(book3);
