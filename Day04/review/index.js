// 1.[10,20,30,40,50]을 30이하이면 100더하기, 아니면 200더하기
const arr = [10, 20, 30, 40, 50];
const quiz1 = arr.map((x) => {
  return x <= 30 ? x + 100 : x + 200;
});
console.log(quiz1);

// 2.["americano","latte","vanilla","mocha","mint","tea"]
// -1.5글자 이하이면 대문자화, 아니면 '☕'로 바꾸기
const arr1 = ["americano", "latte", "vanilla", "mocha", "mint", "tea"];
const quiz2 = arr1.map((x) => {
  return x.length <= 5 ? x.toUpperCase() : "☕";
});
console.log(quiz2);

// 요약화
// const quiz2 = arr1.map((x) =>  x.length <= 5 ? x.toUpperCase() : "☕");
