// DOM[HTML + CSS]

// element type
// const div = document.createElement("div");
// div.innerText = "샤브샤브";
// div.style.color = "red";
// document.body.appendChild(div);

// 버튼태그 3개 만드셈[아메리카노][에이드][라떼]
// const button = document.createElement("button");
// button.style.backgroundColor = "skyblue";
// button.style.color = "white";
// button.innerText = "아메리카노";
// document.body.appendChild(button);

// const button1 = document.createElement("button");
// button1.style.backgroundColor = "skyblue";
// button1.style.color = "white";
// button1.innerText = "에이드";
// document.body.appendChild(button1);

// const button2 = document.createElement("button");
// button2.style.backgroundColor = "skyblue";
// button2.style.color = "white";
// button2.innerText = "라떼";
// document.body.appendChild(button2);

// ["아메리카노", "에이드", "라떼"].forEach((v) => {
//   const button = document.createElement("button");
//   button.style.backgroundColor = "skyblue";
//   button.style.color = "white";
//   button.innerText = v;
//   document.body.appendChild(button);
// });

// [아메리카노, 노랑색, 검은색] [에이드, 핑크색, 하얀색][라떼,하늘색,주황색]
// [
//   {
//     name: "아메리카노",
//     backgroundColor: "yellow",
//     color: "black",
//   },
//   { name: "에이드", backgroundColor: "pink", color: "white" },
//   { name: "라떼", backgroundColor: "skyblue", color: "orange" },
// ].forEach((x) => {
//   const button1 = document.createElement("button");
//   button1.style.backgroundColor = x.backgroundColor;
//   button1.style.color = x.color;
//   button1.innerText = x.name;
//   document.body.appendChild(button1);
// });

const container = document.createElement("div");
container.className = "container";

const box = document.createElement("div");
box.className = "box";
box.style.backgroundColor = "red";
container.appendChild(box);

const box1 = document.createElement("div");
box1.className = "box";
box1.style.backgroundColor = "yellow";
container.appendChild(box1);

document.body.appendChild(container);
