// Grab elements
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var rememberCheckbox = document.getElementById("checkbox");
var existingBtn = document.getElementById("existing");
var form = document.querySelector("form");

// On page load, decide whether to show "Login as existing user"
window.addEventListener("load", function () {
  var savedUsername = localStorage.getItem("username");
  var savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  } else {
    existingBtn.style.display = "none";
  }
});

// Form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var username = usernameInput.value;
  var password = passwordInput.value;

  // 1. Show alert
  alert("Logged in as " + username);

  // 2. Handle Remember Me
  if (rememberCheckbox.checked) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove any existing credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Update visibility of existing user button
  var savedUsername = localStorage.getItem("username");
  var savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  } else {
    existingBtn.style.display = "none";
  }
});

// Existing user login
existingBtn.addEventListener("click", function () {
  var savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert("Logged in as " + savedUsername);
  }
});
