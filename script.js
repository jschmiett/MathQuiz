var gameProgress = 0;
var timeLeft = 60;
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("timerEl");

document.getElementById("start").addEventListener("click", start);

function start() {
  console.log("Worked");
  document.getElementById("welcome").setAttribute("class", "hide");
  document.getElementById("quiz").classList.remove("hide");
}
