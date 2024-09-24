// 유저에게 정수 n(maximum),k(배수)를 입력받으면
// n=10, k=3 -> [3,6,9]
// n=15, k=5 -> [5,10,15]
// 를 도출하는 함수 만들어주세요!

const test = (n, k) => {
  return Array(n)
    .fill(0) //[0,0,0,0,0,0,0,0,0,0]
    .map((x, i) => {
      return i + 1; //[1,2,3,4,5,6,7,8,9,10]
    })
    .filter((x) => {
      x % k == 0; //[3,6,9]
    });
};

// todolist=["점심먹기","복습하기","유튜브 보기","카톡하기"]
// finished=[false,false,true,true]
// newToDoList=["점심먹기","복습하기"]

const todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"];
const finished = [false, false, true, true];

todolist.filter((x, i) => {
  return !finished[i];
});

// 함수화 [패턴화]
const newToDoList = (todolist, finished) => {
  return todolist.filter((x, i) => {
    return !finished[i];
  });
};

// x기준으로 나눴을 때 나눠진 문자열의 각각 길이를 배열화 시킨거
// "xabcxdefxghi" [0,3,3,3]
const string = "xabcxdefxghi";
const arr = string.split("x").map((x) => {
  return x.length;
});
console.log(arr);

// 모음: a,e,i,o,u는 대문자로 바꾸기
// [mElOn]
// const vowels = ["a", "e", "i", "o", "u"];

const fruits = ["malon", "kiwi", "apple", "banana", "orange"].map((x) =>
  x
    .split("")
    .map((x) =>
      x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
        ? x.toUpperCase()
        : x
    )
    .join("")
);
console.log(fruits);

//멜론 한개 쪼개서 모음 대문자로 바꾸는 식
// "melon".split("").map((x) => {
//   return x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
//     ? x.toUpperCase()
//     : x;
// });

// 1~100까지 만들고 369만들기
// [1,2,"👏",...,29,"👏""👏"]
// 알고리즘 문제 풀때
// 해당 타입에 방법이 없으면 다른 타입으로 바꿔서 ㄱㄱ

const a = Array(100)
  .fill(0)
  .map((x, i) => String(i + 1))
  .map((x) =>
    x.includes("3") || x.includes("6") || x.includes("9") ? "👏" : x
  );

console.log(a);
