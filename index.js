
// Oringal Stop Light Challenge
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

// Adding a function stoplight based on 15/2s changes.


const greenLight2 = document.getElementById("goLight2");
const yellowLight2 = document.getElementById("slowLight2");
const redLight2 = document.getElementById("stopLight2");


let gr = function green2() {
  if (greenLight2.classList.contains("go")) {
    greenLight2.classList.remove("go")
  } else {greenLight2.classList.add("go")}
}

let ye = function yellow2() {
  if (yellowLight2.classList.contains("slow")) {
    yellowLight2.classList.remove("slow")
  } else {yellowLight2.classList.add("slow")}
}

let re = function red2() {
  if (redLight2.classList.contains("stop")) {
    redLight2.classList.remove("stop")
  } else {redLight2.classList.add("stop")}}



let arr = [re, re, gr, gr, ye, ye]





setInterval(lightSwitch, 1000)
let i = 0

function lightSwitch() {
  if (i>=arr.length) {
    i=0
  }
  arr[i]()
  i++
}

lightSwitch()
