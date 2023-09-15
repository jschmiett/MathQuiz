var gameProgress = 0;
var timeLeft = 60;
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("timerEl");

document.getElementById("start").addEventListener("click", start);
document.getElementById("digitsSelected").addEventListener("click", isChecked);

function start() {
  console.log("Worked");
  document.getElementById("welcome").setAttribute("class", "hide");
  document.getElementById("digitOptions").classList.remove("hide");
}

function isChecked() {
  console.log("isChecked is running");
  if (document.getElementById("singleDigit").checked) {
    console.log("Single Digit is checked");
  }
}
