var email = document.getElementById("email");
var password = document.getElementById("password");

function loginAlert() {
  if (email.value === "admin@admin.com" && password.value === "123456") {
    alert("Login successful");
  } else {
    alert("Incorrect email or password");
  }
}
