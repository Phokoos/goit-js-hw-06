"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.map(elem => {
	const item = document.createElement("li");
	item.textContent = elem;
	item.classList.add('item');
	document.querySelector('#ingredients').append(item);
	}
);