const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


const callback = () => {
    text.style.fontSize = `${Number(input.value)}px`;
}

input.addEventListener('input', callback);
