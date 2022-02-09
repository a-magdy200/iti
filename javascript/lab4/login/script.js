const BASE_USERNAME = 'admin';
const BASE_PASSWORD = '421$$';
let isValidUsername = false;
let isValidPassword = false;
const result = document.getElementById('result');
const username = document.getElementById('username');
const password = document.getElementById('password');
const onSubmit = (e) => {
  e.preventDefault();
  let inputUsername, inputPassword;
  inputUsername = username.value;
  inputPassword = password.value;
  isValidUsername = inputUsername === BASE_USERNAME;
  isValidPassword = inputPassword === BASE_PASSWORD;

  if (isValidUsername && isValidPassword) {
    result.textContent = 'Logged in successfully';
    result.className = 'success';
  } else {
    result.textContent = 'invalid credentials';
    result.className = 'error';
  }
}
document.getElementById('submitBtn').addEventListener('click', onSubmit);
