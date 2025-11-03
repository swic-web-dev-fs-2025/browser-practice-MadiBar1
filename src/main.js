import "./style.css";

//Variables
let clickCount = 0;

const greetingElement = document.getElementById("greeting");
const button = document.getElementById("change-greeting");
const countElement = document.getElementById("click-count");
const button2 = document.getElementById("reset-count");
const heading = document.querySelector("h1");
const customGreeting = document.getElementById("custom-greeting");

function updateCustomGreeting() {
  const newGreeting = customGreeting.value;
  if (newGreeting.trim() !== "") {
    greetingElement.textContent = newGreeting;
  }
}

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
customGreeting.addEventListener("input", updateCustomGreeting);
