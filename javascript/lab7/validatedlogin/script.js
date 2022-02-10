
let isValidEmail = false;
let isValidPassword = false;
const result = document.getElementById('result');
const emailErrorContainer = document.getElementById('email-error');
const passwordErrorContainer = document.getElementById('password-error');
const email = document.getElementById('email');
const password = document.getElementById('password');
const validationTicks = document.getElementsByClassName('tick');
const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const submitBtn = document.getElementById('submitBtn');
const validatePassword = () => {
  let validChecks = 0, passwordError = [];
  const inputPassword = password.value;
  if (inputPassword.length !==0) {
    if (/\d/g.test(inputPassword)) {
      validChecks++;
    } else {
      passwordError.push("Password should contain at least one  digit");
    }
    // if (/[A-Z]/g.test(inputPassword)) {
    //   validChecks++;
    // } else {
    //   passwordError.push("Password should contain at least on uppercase letter");
    // }
    if (/[a-z]/g.test(inputPassword)) {
      validChecks++;
    } else {
      passwordError.push("Password should contain at least on lowercase letter");
    }
    if (inputPassword.length > 7) {
      validChecks++;
    } else {
      passwordError.push("Password should have 8 or more characters");
    }
  }
  for (let i = 0; i < 4; i++) {
    validationTicks[i].className = (i < validChecks) ? 'tick valid' : 'tick';
  }
  passwordErrorContainer.innerHTML = '';
  for (const error of passwordError) {
    passwordErrorContainer.innerHTML += `<li>${error}</li>`;
  }
  return passwordError.length === 0;
}
const onSubmit = (e) => {
  e.preventDefault();
  let inputEmail, inputPassword, emailError;
  inputEmail = email.value;
  inputPassword = password.value;
  if (inputEmail === '') {
    emailError = 'Email is required';
  } else if (!emailRegex.test(inputEmail)) {
    emailError = 'Please enter a valid email';
  } else {
    emailError = '';
  }
  if (inputPassword === '') {
    passwordErrorContainer.innerHTML = `<li>Password is required</li>`;
    isValidPassword = false;
  } else {
    isValidPassword = validatePassword();
  }
  isValidEmail = emailError === '';
  if (isValidEmail && isValidPassword) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Logging in...";
    const formData = {
      email: inputEmail, // eve.holt@reqres.in
      password: inputPassword // cityslicka2
    };
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then(res => {
        if (res.token) {
          result.textContent = 'Logged in successfully';
          result.className = 'success';
          emailErrorContainer.innerHTML = '';
          passwordErrorContainer.innerHTML = '';
        } else {
          result.innerHTML = '';
          emailErrorContainer.innerHTML = res.error;
        }
      }).catch(err => {
      console.log(err);
      result.innerHTML = '';
      emailErrorContainer.innerHTML = err;
    }).finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Login";
    });
  } else {
  }
}
submitBtn.addEventListener('click', onSubmit);
password.addEventListener("input", () => {
  validatePassword();
});
