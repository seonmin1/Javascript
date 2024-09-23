// String, Number, Boolean, Array
const arr = ["Samsung", "LG", "Apple", "Google"];

arr.push("Hyundai"); // Hyundai 뒤에 추가
arr.unshift("Hybe"); // Hybe 앞에 추가
arr.pop(); // 맨뒤에 요소 빼기
arr.shift(); // 맨앞에 요소 빼기
arr.reverse(); // 배열 거꾸로 ["Google","Apple","LG","Samsung"]
arr.indexOf("LG"); // 1
arr.indexOf("toyota"); // -1
arr.includes("Google"); // true

// quiz
// 유저에게 뉴스기사를 입력받고 찾고 싶은 단어를 입력받은 후
// 단어가 있으면 단어가 있습니다! 없으면 단어가 없습니다!
const news = prompt("뉴스기사 입력");
const word = prompt("찾고 싶은 단어 입력");
const result = news.includes(word) ? "단어가 있습니다!" : "단어가 없습니다!";
alert(result);

// news.split(" "); 단어 구분해주기!
