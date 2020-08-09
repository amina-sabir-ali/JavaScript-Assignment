let name = sessionStorage.getItem("name");
let user_score = sessionStorage.getItem("score");
// let time = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML = name;
document.querySelector(".score").innerHTML = user_score;
// document.querySelector(".time").innerHTML = time;