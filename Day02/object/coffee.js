const ediya = [
  {
    koreaName: "(L)달달커피",
    engName: "(L)Mixed coffee",
    exp: "살 쥰나 찌는 커피임",
    kcal: 277,
    protein: 2,
    na: 39,
    sugar: 20,
    fat: 9,
    caffein: 236,
    allergy: ["우유"],
  },
  {
    koreaName: "팥인절미 1인빙수",
    engName: "Red bean Injeolmi",
    exp: "이거 먹을바에 설빙감 ㅅㄱ",
    kcal: 569,
    protein: 11,
    na: 218,
    sugar: 53,
    fat: 6,
    caffein: 0,
    allergy: ["우유", "대두"],
  },
];

// div 태그 만드셈
const tag = document.createElement("div");

// div 태그에 오른쪽 내용을 넣겠음
tag.innerHTML = `
    <h4 style="font-size:30px">${ediya[0].koreaName}</h4>    
    <p style="color:gray">${ediya[0].exp}</p>
    <span>${ediya[0].kcal} kcal</span>
`;

// body 태그에 div 태그를 넣겠음
document.body.appendChild(tag);
