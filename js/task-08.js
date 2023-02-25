"use strict";

const form = document.querySelector(".login-form");

// Create obj for information from user
const userRegistrInform = {};

form.addEventListener("submit", (event) => {
	event.preventDefault();

	// Check fields
	if (form.elements.email.value === "") {
		alert("Ви не заповнили поле електронної адреси!!!");
	} else if (form.elements.password.value === "") {
		alert("Ви не ввели пароль!!!");
	} else {
		// add data to obj
		userRegistrInform[`${form.elements.email.name}`] = form.elements.email.value;
		userRegistrInform[`${form.elements.password.name}`] = form.elements.password.value;
		// form reset
		form.reset();
		// print obj
		console.log(userRegistrInform);
	}
})