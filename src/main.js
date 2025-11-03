import "./style.css";

//Variables
let clickCount = 0;

const countElement = document.getElementById("click-count");
const button1 = document.getElementById("count-add");
const button3 = document.getElementById("reset-count");

//Increment Button
function incrementCount() {
  clickCount++;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

function resetCount() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

button1.addEventListener("click", incrementCount);
button3.addEventListener("click", resetCount);
