// // 1.아메리카노 주문 버튼 태그 만들고 누르면 주문완료! 로 바뀌는 버튼 만들기
// const button = document.createElement("button");
// button.innerText = "아메리카노";

// button.addEventListener("click", () => {
//   button.innerText = "주문완료!";
// });

// document.body.appendChild(button);

// // 2.배경색이 하늘색 버튼 태그 만들고 누르면 핑크색으로 바뀌는 버튼 만들기
// const button1 = document.createElement("button");
// button1.innerText = "버튼";
// button1.style.backgroundColor = "skyblue";

// button1.addEventListener("click", () => {
//   button1.style.backgroundColor = "pink";
// });

// document.body.appendChild(button1);

// 3.버튼 다른색 5개 만들고 버튼 내용은 색깔이름 넣어야함
// 버튼을 누르면 아래에 박스의 색깔이 바뀌어야함
const box = document.createElement("div");
box.classList.add("box");
box.style.width = "100px";
box.style.height = "100px";
box.style.border = "1px solid black";

["red", "orange", "yellow", "green", "blue"].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v;
  button.style.backgroundColor = v;
  button.addEventListener("click", () => {
    box.style.backgroundColor = v;
  });
  document.body.appendChild(button);
});

// 버튼 두개 추가 [네모],[둥글게]
[
  { name: "네모", redius: "0px" },
  { name: "둥글게", redius: "9999px" },
].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v.name;
  button.addEventListener("click", () => {
    box.style.borderRadius = v.redius;
  });
  document.body.appendChild(button);
});
document.body.appendChild(box);
