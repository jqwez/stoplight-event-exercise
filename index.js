

let greenButton = document.getElementById("goButton");
let yellowButton = document.getElementById("slowButton");
let redButton = document.getElementById("stopButton");

let greenLight = document.getElementById("goLight");
let yellowLight = document.getElementById("slowLight");
let redLight = document.getElementById("stopLight");

function toggle(light, color) {
  if (light.classList.contains(color)) {
    light.classList.remove(color);
  } else {
    light.classList.add(color)
};}
  
  greenButton.onclick = toggle(greenLight, "go");
  yellowButton.onclick = toggle(yellowLight, "slow");
  redButton.onclick = toggle(redLight, "stop");
