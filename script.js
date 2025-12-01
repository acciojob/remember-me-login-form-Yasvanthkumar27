//your JS code here. If required.
// Get elements
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var checkbox = document.getElementById("checkbox");
var submitBtn = document.getElementById("submit");
var existingBtn = document.getElementById("existing");
var form = document.getElementById("login-form");

// Show / hide "Login as existing user" button based on localStorage
function updateExistingButtonVisibility() {
  var savedUsername = localStorage.getItem("username");
  var savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  } else {
    existingBtn.style.display = "none";
  }
}

// On page load, check if credentials exist
window.addEventListener("load", function () {
  updateExistingButtonVisibility();
});

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var username = usernameInput.value;
  var password = passwordInput.value;

  // 1. Show alert
  alert("Logged in as " + username);

  // 2 & 3. Handle "Remember me"
  if (checkbox.checked) {
    // store credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // remove any stored credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Update button visibility according to storage
  updateExistingButtonVisibility();
});

// Handle "Login as existing user" button
existingBtn.addEventListener("click", function () {
  var savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert("Logged in as " + savedUsername);
  }
});
