import "./style.css";

//Variables
let clickCount = 0;

const greetingElement = document.getElementById("greeting");
const button = document.getElementById("change-greeting");
const countElement = document.getElementById("click-count");
const button2 = document.getElementById("reset-count");
const heading = document.querySelector("h1");

function updateGreeting() {
  clickCount++;
  greetingElement.textContent = "Hello, Browser JavaScript!";
  countElement.textContent = `Button clicks: ${clickCount}`;
  if (clickCount >= 5) {
    heading.style.color = "red";
  } else {
    heading.style.color = "black";
  }
}

function resetCount() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

button.addEventListener("click", updateGreeting);
button2.addEventListener("click", resetCount);
