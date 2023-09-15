var gameProgress = 0;
var timeLeft = 60;
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("timerEl");
var singleDigit = document.getElementById("singleDigit");
var doubleDigit = document.getElementById("doubleDigit");
var addition = document.getElementById("addition");
var subtraction = document.getElementById("subtraction");

document.getElementById("start").addEventListener("click", start);
document
  .getElementById("digitsSelected")
  .addEventListener("click", digitsChecked);
document
  .getElementById("optionsSelected")
  .addEventListener("click", optionsChecked);

function start() {
  console.log("Worked");
  document.getElementById("welcome").setAttribute("class", "hide");
  document.getElementById("digitOptions").classList.remove("hide");
}

function digitsChecked() {
  console.log("digitsChecked is running");
  console.log(singleDigit, singleDigit.checked);
  console.log(doubleDigit, doubleDigit.checked);
  if (singleDigit.checked == true && doubleDigit.checked == true) {
    console.log("Single Digit and Double Digit are checked");
  } else if (singleDigit.checked == true && doubleDigit.checked == false) {
    console.log("Only Single Digit is selected");
  } else if (singleDigit.checked == false && doubleDigit.checked == true) {
    console.log("Only Double Digits is selected");
  } else if (singleDigit.checked == false && doubleDigit.checked == false) {
    //build in safty to guard againgst user error here.
    //ask user to pick at least one option and redisplay the page
    console.log("Neither options is selected");
  } else {
    console.log("Something is very broken");
  }
  document.getElementById("digitOptions").setAttribute("class", "hide");
  document.getElementById("quizOptions").classList.remove("hide");
}

function optionsChecked() {
  console.log("optionsChecked is running");
  console.log(addition, addition.checked);
  console.log(subtraction, subtraction.checked);
  if (addition.checked == true && subtraction.checked == true) {
    console.log("Addition and Subtraction are checked");
  } else if (addition.checked == true && subtraction.checked == false) {
    console.log("Only Addition is selected");
  } else if (addition.checked == false && subtraction.checked == true) {
    console.log("Only Subtraction is selected");
  } else if (addition.checked == false && subtraction.checked == false) {
    //build in safty to guard againgst user error here.
    //ask user to pick at least one option and redisplay the page
    console.log("Neither options is selected");
  } else {
    console.log("Something is very broken");
  }
  document.getElementById("quizOptions").setAttribute("class", "hide");
  document.getElementById("quiz").classList.remove("hide");
}
