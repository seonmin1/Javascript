// 버스 종류
// 1.마을 버스, 시내 버스, 고속 버스, 심야 버스
// 1500,2000,8000,10000

// 경기권, 충청권, 강원권, 제주권
// +2000, +3000, +4000, +10000

// 일반석, 프리미엄석, 넷플석
// +1000, +3000, +4000

// 나이 13세 이하 20%, 65세 이상 50%, 나머지 100%임

const bus = {
  value: [
    { name: "마을 버스", price: 1500 },
    { name: "시내 버스", price: 2000 },
    { name: "고속 버스", price: 8000 },
    { name: "심야 버스", price: 10000 },
  ],
  sido: [
    { name: "경기권", price: 2000 },
    { name: "충청권", price: 3000 },
    { name: "강원권", price: 4000 },
    { name: "제주권", price: 10000 },
  ],
  seat: [
    { name: "일반석", price: 1000 },
    { name: "프리미엄석", price: 3000 },
    { name: "넷플석", price: 4000 },
  ],
};

const value_choose = Number(
  prompt(
    `${bus.value[0].name}, ${bus.value[1].name}, ${bus.value[2].name}, ${bus.value[3].name} 중에 고르세요.`
  )
);
const sido_choose = Number(
  prompt(
    `${bus.sido[0].name}, ${bus.sido[1].name}, ${bus.sido[2].name}, ${bus.sido[3].name} 중에 고르세요.`
  )
);
const seat_choose = Number(
  prompt(
    `${bus.seat[0].name}, ${bus.seat[1].name}, ${bus.seat[2].name} 중에 고르세요.`
  )
);

const total =
  bus.value[value_choose].price +
  bus.sido[sido_choose].price +
  bus.seat[seat_choose].price;

const age = Number(prompt("몇살임?"));

const msg = `버스 종류 : ${bus.value[value_choose].name}, 버스 행선지 : ${bus.sido[sido_choose].name}, 버스 좌석 : ${bus.seat[seat_choose].name}`;

if (age <= 13) {
  console.log(`${msg} 총 요금은 ${total * 0.8}원 입니다.`);
} else if (age >= 65) {
  console.log(`${msg} 총 요금은 ${total * 0.5}원 입니다.`);
} else {
  console.log(`${msg} 총 요금은 ${total * 1}원 입니다.`);
}
