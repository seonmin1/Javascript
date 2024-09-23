// 1. 어떤숫자를 넣으면 홀수인지 짝수인지 돌려주는 함수
function num(x) {
  return x % 2 == 1 ? "홀수" : "짝수";
}

// 2. 어떤숫자를 넣으면 5의 배수이면 "5의 배수", 아니면 "5의 배수가 아님"을 돌려주는 함수
function num1(x) {
  return x % 5 == 0 ? "5의 배수" : "5의 배수가 아님";
}

// 3. 어떤숫자를 넣으면 1 - 일반 팝콘, 2 - 캬라멜 팝콘, 3 - 치즈 팝콘, 그 외 - "그런거 없음"을 돌려주는 함수
// 이때 console.log 쓰지말것 (순수성에 위배됨)
function num2(x) {
  if (x == 1) {
    return "일반 팝콘";
  } else if (x == 2) {
    return "캬라멜 팝콘";
  } else if (x == 3) {
    return "치즈 팝콘";
  } else {
    return "그런거 없음";
  }
}

// 4. 어떠한 문자열을 3개 넣으면 배열로 돌려주는 함수 ex)사탕, 떡볶이, 멜론 = [사탕, 떡볶이, 멜론]
function string(a, b, c) {
  return [a, b, c];
}

// 5. 어떠한 과일이름을 넣으면 ~맛 아이스크림을 돌려주는 함수
function icecream(x) {
  return `${x}맛 아이스크림`;
}
const a = icecream("민트");
console.log(a); // 민트맛 아이스크림 출력됨

function fruit(a, b, c) {
  return [a, b, c];
}
