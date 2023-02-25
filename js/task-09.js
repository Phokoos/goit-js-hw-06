"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const elBody = document.querySelector("body");
const elSpanCurrentColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", () => {
	const backgroundColor = getRandomHexColor();
	elBody.style.backgroundColor = `${backgroundColor}`;
	elSpanCurrentColor.textContent = backgroundColor;
})