import "./style.css";

//Variables
let clickCount = 0;

const countElement = document.getElementById("click-count");
const button1 = document.getElementById("count-add");
const button2 = document.getElementById("count-subtract");
const button3 = document.getElementById("reset-count");

//Increment Button
function incrementCount() {
  clickCount++;
  countElement.textContent = `Button clicks: ${clickCount}`;
  if (clickCount >= 10) {
    document.body.style.backgroundColor = "lightblue";
  } else {
    document.body.style.backgroundColor = "white";
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
