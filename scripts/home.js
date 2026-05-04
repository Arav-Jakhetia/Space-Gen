let instagram = document.getElementById("share-instagram")
let twitter = document.getElementById("share-twitter")
let facebook = document.getElementById("share-facebook")

instagram.addEventListener("click", function (event) {
  event.preventDefault()
  window.open("https://www.instagram.com/")
})

twitter.addEventListener("click", function (event) {
  event.preventDefault()
  window.open("https://twitter.com/")
})

facebook.addEventListener("click", function (event) {
  event.preventDefault()
  window.open("https://www.facebook.com/")
})
