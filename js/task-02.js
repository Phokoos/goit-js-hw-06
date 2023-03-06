"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newListIngr = ingredients.map(elem => {
	const item = document.createElement("li");
	item.textContent = elem;
	item.classList.add('item');
	return item;
	}
);

console.log(newListIngr);
document.querySelector('#ingredients').append(...newListIngr);