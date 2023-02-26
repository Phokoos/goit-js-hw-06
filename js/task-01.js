"use strict";

const elItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${elItem.length}`);

elItem.forEach((element) => {
	console.log(`Category: ${element.firstElementChild.textContent}`);
	console.log(`Elements: ${element.lastElementChild.children.length}`);
});