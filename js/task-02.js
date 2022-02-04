const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

function ingrToItem(ingr, ul) {
  ingr.forEach((elem) => {
    const item = document.createElement('li');
    item.textContent = elem;
    item.classList.add('item');
    ul.append(item);
  });
  
}

ingrToItem(ingredients, list);