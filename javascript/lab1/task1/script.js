const BASE_USERNAME = 'admin';
const BASE_PASSWORD = '421$$';
let isValidUsername = false;
let isValidPassword = false;
let inputUsername, inputPassword;
inputUsername = prompt("Enter username");
inputPassword = prompt("Enter Password");
isValidUsername = inputUsername === BASE_USERNAME;
isValidPassword = inputPassword === BASE_PASSWORD;

if (isValidUsername && isValidPassword) {
  alert("Logged in successfully!");
} else {
  if(!isValidPassword && !isValidUsername) {
    alert("Invalid username and password");
  } else if (!isValidUsername) {
    alert("Invalid username");
  } else {
    alert("Invalid password");
  }
}
