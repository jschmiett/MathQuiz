var gameProgress = 0;
var timeLeft = 60;
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("timerEl");
var singleDigit = document.getElementById("singleDigit");
var doubleDigit = document.getElementById("doubleDigit");

document.getElementById("start").addEventListener("click", start);
document.getElementById("digitsSelected").addEventListener("click", isChecked);

function start() {
  console.log("Worked");
  document.getElementById("welcome").setAttribute("class", "hide");
  document.getElementById("digitOptions").classList.remove("hide");
}

function isChecked() {
  console.log("isChecked is running");
  console.log(singleDigit, singleDigit.checked);
  console.log(doubleDigit, doubleDigit.checked);
  if (singleDigit == true && doubleDigit == true) {
    console.log("Single Digit and Double Digit are checked");
  } else if (singleDigit == true && doubleDigit == false) {
    console.log("Only Single Digit is selected");
  } else if (singleDigit == false && doubleDigit == true) {
    console.log("Only Double Digits is selected");
  } else if (singleDigit == false && doubleDigit == false) {
    console.log("Neither options is selected");
  } else {
    console.log("Something is very broken");
  }
}
