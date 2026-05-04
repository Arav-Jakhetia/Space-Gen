function createStarfield() {
  let starBoxes = document.querySelectorAll(".starfield")

  for (let b = 0; b < starBoxes.length; b++) {
    let box = starBoxes[b]

    for (let i = 0; i < 140; i++) {
      let star = document.createElement("span")
      let size = Math.random()

      if (size < 0.6) {
        star.className = "star small"
      } else if (size < 0.9) {
        star.className = "star"
      } else {
        star.className = "star big"
      }

      star.style.left = Math.random() * 100 + "%"
      star.style.top = Math.random() * 100 + "%"
      star.style.animationDelay = Math.random() * 6 + "s"
      star.style.animationDuration = 4 + Math.random() * 5 + "s"

      box.appendChild(star)
    }
  }
}

function activeNav() {
  let links = document.querySelectorAll(".nav-menu a")
  let page = window.location.pathname.split("/").pop()

  for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") == page) {
      links[i].classList.add("active")
    }
  }
}

createStarfield()
activeNav()
