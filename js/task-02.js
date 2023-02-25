"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newItemForIngrList = [];

ingredients.forEach(elem => {
	const item = document.createElement("li");
	item.textContent = elem;
	item.classList.add('item');
	newItemForIngrList.push(item);
	}
);

document.querySelector('#ingredients').append(...newItemForIngrList);