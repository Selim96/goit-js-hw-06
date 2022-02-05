const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
    const oninput = input.value.trim();
    output.textContent = oninput || 'Anonymous';
});

