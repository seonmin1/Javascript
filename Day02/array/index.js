// 기본 타입: String, Number, Boolean, Null, Undefined
// 참조 타입: Array

// Array(배열):[]
// 시작은 0번째부터
const paik = ["아메리카노", "라떼", "모카", "바닐라"];
console.log(paik);
console.log(paik[2]);

// 서브웨이
// 빵메뉴 고르기[플랫, 화이트, 위트]
// 치즈메뉴 고르기[슈레드, 모짜렐라, 아메리칸치즈]
// 소스[머스타드, 핫칠리, 소금, 후추, 스언, 홀레]
// 쿠키메뉴[화이트, 초콜릿, 아몬드]
// 음료메뉴 고르기[콜라, 제로콜라, 스프라이트, 커피]
// 최종메뉴는 플랫-모짜렐라-소금-아몬드쿠키-콜라

const bread = ["플랫", "화이트", "위트"];
const cheese = ["슈레드", "모짜렐라", "아메리칸치즈"];
const source = ["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"];
const cookie = ["화이트", "초콜릿", "아몬드"];
const drink = ["콜라", "제로콜라", "스프라이트", "커피"];

const choose1 = Number(prompt(`${bread} 중에 고르시오(0~2)`));
const choose2 = Number(prompt(`${cheese} 중에 고르시오(0~2)`));
const choose3 = Number(prompt(`${source} 중에 고르시오(0~5)`));
const choose4 = Number(prompt(`${cookie} 중에 고르시오(0~2)`));
const choose5 = Number(prompt(`${drink} 중에 고르시오(0~3)`));

console.log(
  `최종메뉴는 ${bread[choose1]} - ${cheese[choose2]} - ${source[choose3]} - ${cookie[choose4]} - ${drink[choose5]}`
);
