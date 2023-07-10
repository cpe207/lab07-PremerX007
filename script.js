const submitBtn = document.querySelector("#submit-btn");
const firstname = document.querySelector("#first-name-input");
const lastname = document.querySelector("#last-name-input");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstname.onkeyup = () => {
  firstname.classList.remove("is-valid");
  firstname.classList.remove("is-invalid");
};

lastname.onkeyup = () => {
  lastname.classList.remove("is-valid");
  lastname.classList.remove("is-invalid");
};

email.onkeyup = () => {
  email.classList.remove("is-valid");
  email.classList.remove("is-invalid");
};

password.onkeyup = () => {
  password.classList.remove("is-valid");
  password.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;
  if (firstname.value === "") {
    firstname.classList.add("is-invalid");
  } else {
    firstname.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (lastname.value === "") {
    lastname.classList.add("is-invalid");
  } else {
    lastname.classList.add("is-valid");
    isLastNameOk = true;
  }

  if (validateEmail(email.value)) {
    email.classList.add("is-valid");
    isEmailOk = true;
  } else {
    email.classList.add("is-invalid");
  }

  if (password.value.length >= 6) {
    password.classList.add("is-valid");
    isPasswordOk = true;
  } else {
    password.classList.add("is-invalid");
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk) {
    alert("Registered successfully");
  }
};
