// 좋아하는 색깔 5개 배열로 넣은 뒤에,
// grid로 3열로 박스(100개) 형태로 넣기 (색깔별로 반복해서 100개)

const main = document.createElement("main");
const container = document.createElement("section");
container.classList.add("container");

const colors = ["red", "yellow", "skyblue", "blue", "pink"];

Array(100)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colors[i % colors.length];
    container.appendChild(box);
  });

main.appendChild(container);
document.body.appendChild(main);
