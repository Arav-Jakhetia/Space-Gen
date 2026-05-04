let form = document.getElementById("form")
let create = document.getElementById("create")
let terms = document.getElementById("terms")

let user = document.getElementById("user")
let email = document.getElementById("email")
let pass = document.getElementById("pass")

let d1 = document.getElementById("d1")
let d2 = document.getElementById("d2")
let m1 = document.getElementById("m1")
let m2 = document.getElementById("m2")
let y1 = document.getElementById("y1")
let y2 = document.getElementById("y2")
let y3 = document.getElementById("y3")
let y4 = document.getElementById("y4")

user.pattern = "[A-Za-z0-9]{4,}"
user.title = "Username must be at least 4 letters or numbers"

email.pattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
email.title = "Enter a valid email address"

pass.pattern = ".{8,}"
pass.title = "Password must be at least 8 characters"

d1.pattern = "[0-9]"
d2.pattern = "[0-9]"
m1.pattern = "[0-9]"
m2.pattern = "[0-9]"
y1.pattern = "[0-9]"
y2.pattern = "[0-9]"
y3.pattern = "[0-9]"
y4.pattern = "[0-9]"

d1.title = "Enter numbers only"
d2.title = "Enter numbers only"
m1.title = "Enter numbers only"
m2.title = "Enter numbers only"
y1.title = "Enter numbers only"
y2.title = "Enter numbers only"
y3.title = "Enter numbers only"
y4.title = "Enter numbers only"

terms.addEventListener("change", function () {
  create.disabled = !terms.checked
})

create.addEventListener("click", function () {
  if (form.reportValidity()) {
    window.location.href = "login.html"
  }
})
