// // 1.[1,2,3,4,5] -> 두배해주기
// const num = [1, 2, 3, 4, 5];

// const a = num.map((x) => {
//   return x * 2;
// });

// // 2.[1,2,3,4,5] -> 홀수면 두배 짝수면 세배
// const b = num.map((x) => {
//   return x % 2 == 0 ? x * 3 : x * 2;
// });

// // 3.[1,2,3,4,5] -> 3이하면 '체리🍒' 아니면 '수박🍉'
// const c = num.map((x) => {
//   return x <= 3 ? "🍒" : "🍉";
// });

// console.log(a);
// console.log(b);
// console.log(c);

// const fruitArray = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "avocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ];
// // 1.문자의 길이가 7글자 이상이면 대문자화 아니면 소문자화
// const length = fruitArray.map((x) => {
//   return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
// });

// // 2.알파벳 a가 들어가면 대문자화 아니면 소문자화
// const alpha = fruitArray.map((x) => {
//   return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
// });

// // 3.단어 안에 있는 알파벳 a를 '🍒' 바꾸기
// const word = fruitArray.map((x) => {
//   return x.replaceAll("a", "🍒");
// });

// console.log(length);
// console.log(alpha);
// console.log(word);

const starbucks = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6000,
    shots: 2,
    ingredients: ["milk", "wheat", "beans"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit", "water", "source"],
  },
];

// 1.가을시즌 이벤트 -> 모든 가격을  10% 할인한 가격으로 바꿔주셈
const quiz1 = starbucks.map((x) => {
  x.price = x.price * 0.9;
  return x;
});
console.log(quiz1);

// // 2.두유시즌 이벤트 -> 성분에 두유 강제 추가
const quiz2 = starbucks.map((x) => {
  x.ingredients.push("soybean");
  return x;
});
console.log(quiz2);

// 3.스타벅스 아아 기념 -> 이름이 아메리카노면 2000원 할인된 가격으로 바꿔주고 샷 하나 더 늘려주셈
const quiz3 = starbucks.map((x) => {
  if (x.name == "americano") {
    x.price = x.price * 0.8;
    x.shots = x.shots + 1;
    return x;
  } else {
    return x;
  }
});
console.log(quiz3);

// 4.인플레이션시즌 이벤트 -> 모든 가격 20% 떡상한 가격으로 바꿔주셈
const quiz4 = starbucks.map((x) => {
  x.price = x.price * 1.2;
  return x;
});
console.log(quiz4);
