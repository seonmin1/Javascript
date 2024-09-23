// General Function[구문법]
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}

// Arrow Function[신문법]
// () => {}
const add1 = (x, y) => {
  return x + y;
};
const subtract1 = (x, y) => {
  return x - y;
};

// ~과일 넣으면 ~맛 아이스크림 돌려주는 함수
const icecream = (x) => {
  return `${x}맛 아이스크림`;
};

// 문자 3개 넣으면 배열로 돌려주는 함수
const word = (a, b, c) => {
  return [a, b, c];
};

// 숫자를 넣으면 홀수인지 짝수인지 알려주는 함수
const num = (x) => {
  return x % 2 == 0 ? "짝수" : "홀수";
};
