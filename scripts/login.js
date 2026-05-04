let form = document.getElementById("login")
let go = document.getElementById("go")

let email = document.getElementById("email")
let pass = document.getElementById("pass")

email.pattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
email.title = "Enter a valid email address"

pass.pattern = ".{8,}"
pass.title = "Password must be at least 8 characters"

go.addEventListener("click", function () {
  if (form.reportValidity()) {
    window.location.href = "dashboard.html"
  }
})
