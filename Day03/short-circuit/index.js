const a = false || true; //true
const b = undefined || "자바스크립트"; //자바스크립트

const username = prompt("유저 이름 입력");
alert(`${username || "Guest"}님 환영합니다.`); //유저이름 입력안됐을 시 Guest로 출력됨

// &&[and]
const c = true && "탕수육"; //탕수육
const d = false && "탕후루"; //false

const isLoggin = prompt("비밀번호 입력하셈") == "1234";
isLoggin && alert("주인님 ㅎㅇ"); //비밀번호가 1234 입력됐을 때 주인님 ㅎㅇ 출력
