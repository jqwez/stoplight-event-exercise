

const greenButton = document.getElementById("goButton");
const yellowButton = document.getElementById("slowButton");
const redButton = document.getElementById("stopButton");

let greenLight = document.getElementById("goLight");
let yellowLight = document.getElementById("slowLight");
let redLight = document.getElementById("stopLight");

function toggle(light, color) {
  if (light.style.background? "#111": false) {
    light.style.backgroundColor = color;
  } else {
    light.style.backgroundColor = "#111";
}
  
  greenButton.onclick = toggle(greenLight, "green")
  yellowButton.onclick = toggle(yellowLight, "yellow")
  redButton.onclick = toggle(redButton, "red")
