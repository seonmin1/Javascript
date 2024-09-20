// 운동을 prompt로 입력받고 console.log로 운동순서 A->B->C 출력하세요
const exe = prompt("첫번째 운동을 입력하세요");
const exe1 = prompt("두번째 운동을 입력하세요");
const exe2 = prompt("세번째 운동을 입력하세요");
console.log(`운동순서 : ${exe}-> ${exe1}-> ${exe2}`);

// 커피 한잔의 가격을 prompt로 입력받고 또 prompt로 커피의 수량을 입력받아 총 가격을 계산
const coffee = Number(prompt("커피 한잔의 가격은?"));
const coffee1 = Number(prompt("커피의 수량은?"));
console.log(`커피의 총 가격은 ${coffee * coffee1}원 입니다.`);

// 태어난 년도를 prompt로 입력받고 console.log로 A살이군요 출력하세요
const year = Number(prompt("태어난 년도를 입력하세요."));
console.log(`${year}년생이니 나이는 ${2025 - year}살이군요!`);
