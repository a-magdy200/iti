const BASE_EMAIL = 'admin';
const BASE_PASSWORD = '421$$';
let isValidEmail = false;
let isValidPassword = false;
const result = document.getElementById('result');
const email = document.getElementById('email');
const password = document.getElementById('password');
const onSubmit = (e) => {
  e.preventDefault();
  let inputEmail, inputPassword;
  inputEmail = email.value;
  inputPassword = password.value;
  isValidEmail = inputEmail === BASE_EMAIL;
  isValidPassword = inputPassword === BASE_PASSWORD;
  if (isValidEmail && isValidPassword) {
    result.textContent = 'Logged in successfully';
    result.className = 'success';
  } else {
    result.textContent = 'invalid credentials';
    result.className = 'error';
  }
}
document.getElementById('submitBtn').addEventListener('click', onSubmit);
