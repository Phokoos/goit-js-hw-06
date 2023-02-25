"use strict";

let counterValue = 0;

const counter = document.querySelector("#value");
const counterDecrease = document.querySelector('button[data-action="decrement"]');
const counterIncrease = document.querySelector('button[data-action="increment"]');

const clickOnCounter = (value) => {
	counterValue += value;
	counter.textContent = counterValue;
};

counterDecrease.addEventListener("click", () => clickOnCounter(-1));
counterIncrease.addEventListener("click", () => clickOnCounter(+1));