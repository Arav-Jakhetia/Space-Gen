let itemName = document.getElementById("item-name")
let itemPrice = document.getElementById("item-price")

let form = document.getElementById("payment-form")
let cardName = document.getElementById("card-name")
let cardNumber = document.getElementById("card-number")
let expiry = document.getElementById("expiry")
let cvv = document.getElementById("cvv")

let dialog = document.getElementById("success-dialog")
let okButton = document.getElementById("ok-btn")
let loader = document.getElementById("order-loader")

let search = window.location.search
let params = new URLSearchParams(search)
let item = params.get("item")
let price = params.get("price")

if (item == null) {
  item = "Merch Item"
}

if (price == null) {
  price = "0"
}

itemName.innerHTML = item
itemPrice.innerHTML = "&#8377;" + price

cardName.pattern = "[A-Za-z ]{3,}"
cardName.title = "Enter card holder name"

cardNumber.pattern = "[0-9]{16}"
cardNumber.title = "Card number must be 16 digits"

expiry.pattern = "(0[1-9]|1[0-2])/[0-9]{2}"
expiry.title = "Enter expiry in MM/YY format"

cvv.pattern = "[0-9]{3,4}"
cvv.title = "CVV must be 3 or 4 digits"

form.addEventListener("submit", function (event) {
  event.preventDefault()

  if (form.reportValidity()) {
    loader.classList.add("active")

    setTimeout(function () {
      loader.classList.remove("active")
      dialog.showModal()
    }, 2000)
  }
})

okButton.addEventListener("click", function () {
  dialog.close()
  window.location.href = "merch.html"
})
