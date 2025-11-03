import "./style.css";

//Variables
let clickCount = 0;

const countElement = document.getElementById("click-count");
const button1 = document.getElementById("count-add");
const button2 = document.getElementById("count-subtract");
const button3 = document.getElementById("reset-count");
const background = document.body;
const nameInput = document.getElementById("name-input");
const nameDisplay = document.getElementById("name-display");
const button4 = document.getElementById("reset-name");

function updateName() {
  nameDisplay.textContent = `Hello, ${nameInput.value}!`;
}

//Increment Button
function incrementCount() {
  clickCount++;
  countElement.textContent = `Button clicks: ${clickCount}`;
  if (clickCount >= 10) {
    background.style.backgroundColor = "lightblue";
  } else {
    background.style.backgroundColor = "white";
  }
}

//Decrement Button
function decrementCount() {
  clickCount--;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

function resetCount() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

button1.addEventListener("click", incrementCount);
button2.addEventListener("click", decrementCount);
button3.addEventListener("click", resetCount);
nameInput.addEventListener("input", updateName);
