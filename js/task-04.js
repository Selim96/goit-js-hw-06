const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

const handleClickDec = () => { 
    counterValue -= 1;
    value.innerHTML = `${counterValue}`;   
};

const handleClickInc = () => {
    counterValue += 1;
    value.innerHTML = `${counterValue}`;
        
};

btnDecr.addEventListener("click", handleClickDec);
btnIncr.addEventListener("click", handleClickInc);

const value = document.querySelector('#value');

value.innerHTML = `${counterValue}`;








