import "./style.css";

//Variables
let clickCount = 0;

const greetingElement = document.getElementById("greeting");
const button = document.getElementById("change-greeting");
const countElement = document.getElementById("click-count");

function updateGreeting() {
  clickCount++;
  greetingElement.textContent = 'Hello, Browser JavaScript!';
  countElement.textContent = \`Button clicks: \${clickCount}\`;
}
