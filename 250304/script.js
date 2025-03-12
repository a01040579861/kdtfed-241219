const student = {
  name: "짱구",
  major: "컴퓨터공학",
  grade: 2,
};

const json = JSON.stringify(student);
console.log(json);

const json2 = JSON.parse(json);
console.log(json2);
