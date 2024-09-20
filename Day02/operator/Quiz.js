// 1. 출생년도를 물어보고 2005년 이하면 성인입니다, 아니면 미성년자입니다.
const year = Number(prompt("출생년도를 입력하세요"));
console.log(year <= 2005 ? "성인입니다." : "미성년자입니다.");

// 2. 놀이기구를 타려고 키를 물었음
// 150cm 이하면 탈 수 없습니다. 아니면 탈 수 있습니다.
const a = Number(prompt("키를 입력하세요"));
console.log(a <= 150 ? "탈 수 없습니다." : "탈 수 있습니다.");

// 3.양의 정수를 입력받고, 분초를 바꾸는 프로그램
// ex) 63 -> 1분 3초, 123 -> 2분 5초
const num = Number(prompt("양의 정수를 입력하세요"));
const min = parseInt(num / 60);
const sec = num % 60;
console.log(`${min}분 ${sec}초`);
