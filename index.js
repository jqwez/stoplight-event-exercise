

const greenButton = document.getElementById("goButton");
const yellowButton = document.getElementById("slowButton");
const redButton = document.getElementById("stopButton");

const greenLight = document.getElementById("goLight");
const yellowLight = document.getElementById("slowLight");
const redLight = document.getElementById("stopLight");

function green() {
  if (greenLight.classList.contains("go")) {
    greenLight.classList.remove("go")
  } else {greenLight.classList.add("go")}
}

function yellow() {
  if (yellowLight.classList.contains("slow")) {
    yellowLight.classList.remove("slow")
  } else {yellowLight.classList.add("slow")}
}

function red() {
  if (redLight.classList.contains("stop")) {
    redLight.classList.remove("stop")
  } else {redLight.classList.add("stop")}
}
  
greenButton.addEventListener("click", green);
yellowButton.addEventListener("click", yellow)
redButton.addEventListener("click", red)

