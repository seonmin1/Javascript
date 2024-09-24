// arr 함수들
// map : 바꿔줘
// filter : 걸러줘, 어떠한 조건에 부합하는 요소만 남겨줘

// 10,20만 살아남음
// [10, 20, 30, 40, 50].filter((x) => {
//   return 30 > x;
// });

//20,40만 살아남음
// [10, 20, 30, 40, 50].filter((x) => {
//   return x == 20 || x == 40;
// });

// every : 어떠한 조건에 모든 요소가 부합함? (return Boolean)
// [10, 20, 30, 40, 50].every((x) => {
//   return x > 10;
// });

// some : 어떠한 조건에 하나 요소가 부합함? (return Boolean)
// [10, 20, 30, 40, 50].some((x) => {
//   return x > 10;
// });

// 배열만들기
// [0,1,2,3,...,19] 만들기
Array(20)
  .fill(0)
  .map((x, i) => {
    return i;
  });

// quiz
// 1.[1,2,3,4,5,6,7,8,9,10] 중에 3의 배수만 살려줘
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const quiz1 = arr.filter((x) => {
  return x % 3 == 0;
});
console.log(quiz1);

// 2.[1,2,3,4,5,6,7,8,9,10] 4이상 8이하만 살려줘
const quiz2 = arr.filter((x) => {
  return x >= 4 && x <= 8;
});
console.log(quiz2);

const fruitArray = [
  "watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
];

// 3.알파벳 o가 들어있는 애들만 살려줘
const quiz3 = fruitArray.filter((x) => {
  return x.includes("o");
});
console.log(quiz3);

// 4.문자길이가 6글자 이상만 살려줘
const quiz4 = fruitArray.filter((x) => {
  return x.length >= 6;
});
console.log(quiz4);

// 5.문자길이가 짝수인 애들만 살리고, 대문자화 시켜줘

const fruitArray1 = [
  "watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
]
  .filter((x) => {
    return x.length % 2 == 0;
  })
  .map((x) => {
    return x.toUpperCase();
  });
console.log(fruitArray1);
