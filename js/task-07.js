"use strict";

const controlFontInput = document.querySelector("#font-size-control")
const elTextSpan = document.querySelector("#text");

elTextSpan.style.fontSize = `${controlFontInput.value}px`;

controlFontInput.addEventListener("input", (event) => {
	elTextSpan.style.fontSize = `${controlFontInput.value}px`;
})
