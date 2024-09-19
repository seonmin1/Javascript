// prompt로 첫번째 숫자 입력
// prompt로 두번째 숫자 입력
// 콘솔로 두 수의 합은 ~입니다.

// 첫번째 방법
// const number1 = Number(prompt("첫번째 숫자 입력"));
// const number2 = Number(prompt("두번째 숫자 입력"));
// console.log(`두 수의 합은 ${number1 + number2} 입니다.`);

// 두번째 방법
// const number1 = prompt("첫번째 숫자 입력");
// const number2 = prompt("두번째 숫자 입력");
// const sum = Number(number1) + Number(number2);
// console.log(`두 수의 합은 ${sum} 입니다.`);

// ask : prompt, answer : console
// 1. 한 변의 길이를 물어보고, 정사각형의 넓이와 둘레 알려주기
const side = Number(prompt("정사각형의 한 변의 길이는?"));
console.log(`정사각형의 넓이는 ${side * side}이고 둘레는 ${side * 4}입니다.`);

// 2. 밑변과 높이를 물어보고, 정삼각형의 넓이 구하기
const width = Number(prompt("정삼각형의 밑변의 길이는?"));
const height = Number(prompt("정삼각형의 높이의 길이는?"));
console.log(`정삼각형의 넓이는 ${(width * height) / 2}입니다.`);

// 3. 반지름을 물어보고, 원의 넓이와 둘레 구하기
const radius = Number(prompt("원의 반지름의 길이는?"));
console.log(
  `원의 넓이는 ${radius * radius * 3.14}이고 둘레는 ${2 * 3.14 * radius}입니다.`
);

// 4. 출생년도를 물어보고 나이를 나타내기 ex)몇년생임? 1995 -> 30
const year = Number(prompt("당신의 출생년도는?"));
console.log(`당신의 나이는 ${2025 - year}살 입니다.`);

// 5. 일본여행 갈거임 그래서 100만원 환전하면 현재 환율로 엔화 나타내기
// ex) 얼마 환전? 1,000,000원 -> 107,451
const money = Number(prompt("얼마를 환전하시겠습니까?"));
console.log(`당신의 환전금액은 ${money * 0.107439}엔 입니다.`);
