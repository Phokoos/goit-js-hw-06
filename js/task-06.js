"use strict";


const inputForm = document.querySelector("#validation-input");

inputForm.addEventListener("change", (event) => {
	if (event.currentTarget.value.length >= inputForm.dataset.length) {
		inputForm.classList.remove("invalid");
		inputForm.classList.add("valid");
	} else {
		inputForm.classList.remove("valid");
		inputForm.classList.add("invalid");
	}
})