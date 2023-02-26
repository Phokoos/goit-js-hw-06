"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elBoxes = document.querySelector("#boxes");
const inputField = document.querySelector(`input[type="number"]`);
const btnCreate = document.querySelector(`button[data-create]`);
const btnDestroy = document.querySelector(`button[data-destroy]`);

btnCreate.addEventListener("click", () => {
	createBoxes(inputField.value);
})

btnDestroy.addEventListener("click", () => {
	elBoxes.innerHTML = "";
	inputField.value = "";
})

// MAIN FUNCTION
const createBoxes = (amount) => {
	// Array for elements
	let newBoxesArray = [];
	//Logic part
	for (let index = 0; index < amount; index+=1) {
		const item = document.createElement("div");
		const length = (10 * (index+3));
		item.style.width = `${length}px`;
		item.style.height = `${length}px`;
		item.style.backgroundColor = `${getRandomHexColor()}`;
		newBoxesArray.push(item);
	}
	// Add elements to div
	elBoxes.append(...newBoxesArray);
}


