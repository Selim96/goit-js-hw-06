const body = document.body;
const btn = document.querySelector('.change-color')
const color = document.querySelector('.color');

btn.addEventListener('click', handalclick);

function handalclick() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = `${getRandomHexColor()}`;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
