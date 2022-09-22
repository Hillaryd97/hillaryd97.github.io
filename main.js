const button = document.querySelectorAll(".btn");
const results = document.getElementById("result");

function display(value) {
  results.value += value;
}

function clearScreen() {
  results.value = "";
}

function calculate() {
  var p = results.value;
  var q = eval(p);
  results.value = q;
}

function percent() {
  const percentage = results.value * 1/100;
  results.value = percentage;
}
