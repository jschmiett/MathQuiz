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
  if (singleDigit.checked == true && doubleDigit.checked == true) {
    console.log("Single Digit and Double Digit are checked");
  } else if (singleDigit.checked == true && doubleDigit.checked == false) {
    console.log("Only Single Digit is selected");
  } else if (singleDigit.checked == false && doubleDigit.checked == true) {
    console.log("Only Double Digits is selected");
  } else if (singleDigit.checked == false && doubleDigit.checked == false) {
    console.log("Neither options is selected");
  } else {
    console.log("Something is very broken");
  }
}
