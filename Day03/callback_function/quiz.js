// makeCoffee 함수 만들기 [커피 준비 - 커피 완료]
// americano,latte,vanilla 함수 만들어서
// makeCoffee(americano) // [커피 준비 - 아메리카노 - 커피 완료]
// makeCoffee(latte) // [커피 준비 - 아메리카노 - 커피 완료]
// makeCoffee(vanilla) // [커피 준비 - 아메리카노 - 커피 완료]

const makeCoffee = (menu) => {
  console.log("커피 준비");
  menu();
  console.log("커피 완료");
};

const americano = () => {
  console.log("아메리카노 만들기");
  console.log("원두 볶기");
  console.log("물 끓이기");
  console.log("커피 내리기");
};

const latte = () => {
  console.log("라떼 만들기");
  console.log("원두 볶기");
  console.log("물 끓이기");
  console.log("우유 데우기");
  console.log("커피 내리기");
};

const vanilla = () => {
  console.log("바닐라라떼 만들기");
  console.log("원두 볶기");
  console.log("물 끓이기");
  console.log("우유 데우기");
  console.log("바닐라빈(시럽) 넣기");
  console.log("커피 내리기");
};

makeCoffee(americano);
makeCoffee(latte);
makeCoffee(vanilla);

//이름을 정하지 못한 메뉴는 바로 함수 넣기로 출력가능 ex)아망추
makeCoffee(() => {
  console.log("라떼 만들기");
  console.log("원두 볶기");
  console.log("물 끓이기");
  console.log("우유 데우기");
  console.log("커피 내리기");
  console.log("망고 넣기");
});
