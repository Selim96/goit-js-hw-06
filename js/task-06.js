const input = document.querySelector('#validation-input');
input.addEventListener('blur', () => { 
    input.classList.add('invalid');
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        return;
    } 
});