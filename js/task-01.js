"use strict";

const elItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${elItem.length}`);

elItem.forEach((element) => {
	console.log(`Category: ${element.querySelector('h2').textContent}`);

	console.log(`Elements: ${element.querySelectorAll("li").length}`);
});