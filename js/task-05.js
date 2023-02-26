"use strict";

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", event => {
	textOutput.textContent = event.currentTarget.value;
});

textInput.addEventListener("blur", () => {
	if (textOutput.textContent.trim() === "") {
		textOutput.textContent = "Anonymous";
	}
});