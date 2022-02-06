const loginForm = document.querySelector('#login-form');


const  handlClick = (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  console.log(email.value, password.value);
};

loginForm.addEventListener("submit", handlClick);