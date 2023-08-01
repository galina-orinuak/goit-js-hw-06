const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", click);

function click(event) {
  let rndmColor = getRandomHexColor();
  body.style.background = rndmColor;
  span.textContent = rndmColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
