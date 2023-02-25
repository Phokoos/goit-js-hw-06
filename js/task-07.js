"use strict";

const controlFontInput = document.querySelector("#font-size-control")
const elTextSpan = document.querySelector("#text");

controlFontInput.addEventListener("input", (event) => {
	elTextSpan.style.fontSize = `${controlFontInput.value}px`;
})
