let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");

let usernameError = document.querySelector("#usernameError");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let confirmPasswordError = document.querySelector("#confirmPasswordError");

let form = document.querySelector("#registrationForm");

// Get saved username and email when page loads
username.value = localStorage.getItem("username") || "";
email.value = localStorage.getItem("email") || "";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    username.validity.valid &&
    email.validity.valid &&
    password.validity.valid &&
    confirmPassword.value === password.value
  ) {
    alert("Account created successfully!");
  } else {
    alert("input filed missing");
  }
});

username.addEventListener("input", function () {
  localStorage.setItem("username", username.value);
  if (!username.validity.valid) {
    if (username.validity.valueMissing) {
      usernameError.textContent = "Username is required.";
    } else if (username.validity.tooShort) {
      usernameError.textContent = "Username must be at least 5 characters.";
      //   console.log(usernameError)
    } else if (username.validity.patternMismatch) {
      usernameError.textContent =
        "Username can only contain letters, numbers, and underscores.";
    }
  } else {
    usernameError.textContent = "";
  }
});

email.addEventListener("input", function () {
  localStorage.setItem("email", email.value);
  if (!email.validity.valid) {
    if (email.validity.valueMissing) {
      emailError.textContent = "Email is required.";
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Please enter a valid email address.";
    }
  } else {
    emailError.textContent = "";
  }
});

password.addEventListener("input", function () {
  if (!password.validity.valid) {
    if (password.validity.valueMissing) {
      passwordError.textContent = "Password is required.";
    } else if (password.validity.tooShort) {
      passwordError.textContent = "Password must be at least 8 characters.";
    }
  } else {
    passwordError.textContent = "";
  }
  // Re-check confirm password whenever the password changes validateConfirmPassword();
  validateConfirmPassword();
});

confirmPassword.addEventListener("input", validateConfirmPassword);

function validateConfirmPassword() {
  if (confirmPassword.value === "") {
    confirmPasswordError.textContent = "Please confirm your password.";
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
  } else {
    confirmPasswordError.textContent = "";
  }
}
