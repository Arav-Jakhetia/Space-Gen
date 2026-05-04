let canvas = document.getElementById("solar-canvas")

let scene = new THREE.Scene()
scene.background = new THREE.Color(0x02050d)

let renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
})

let camera = new THREE.PerspectiveCamera(45, 1, 0.1, 4000)
camera.position.set(0, 42, 132)

let cameraDistance = camera.position.length()
let minDistance = 34
let maxDistance = 320

let loader = new THREE.TextureLoader()

function loadTexture(path) {
  let texture = loader.load(path)
  return texture
}

let ambientLight = new THREE.AmbientLight(0xffffff, 0.36)
scene.add(ambientLight)

let sunLight = new THREE.PointLight(0xfff2c4, 1.7, 2400)
sunLight.position.set(0, 0, 0)
scene.add(sunLight)

let sunGeometry = new THREE.SphereGeometry(6.2, 72, 72)
let sunMaterial = new THREE.MeshBasicMaterial({
  map: loadTexture("texture/sun_map.jpg"),
})
let sun = new THREE.Mesh(sunGeometry, sunMaterial)
sun.name = "Sun"
scene.add(sun)

let galaxyGeometry = new THREE.SphereGeometry(1400, 64, 64)
let galaxyMaterial = new THREE.MeshBasicMaterial({
  map: loadTexture("texture/galaxy.png"),
  side: THREE.BackSide,
  transparent: true,
  opacity: 0,
})
let galaxy = new THREE.Mesh(galaxyGeometry, galaxyMaterial)
scene.add(galaxy)

let planetList = [
  ["Mercury", 0.383, 12, 0.241, 0.004, "texture/mercury_map.png", "texture/mercury_bump_map.png", 0.02, "", ""],
  ["Venus", 0.949, 17, 0.615, 0.0022, "texture/venus_map.jpg", "texture/venus_bump_map.png", 0.02, "texture/venus_atmosphere.jpg", ""],
  ["Earth", 1, 23, 1, 0.0115, "texture/earth_map.jpg", "texture/earth_bump_map.jpg", 0.03, "texture/earth_cloud.jpg", ""],
  ["Mars", 0.532, 30, 1.881, 0.01, "texture/mars_map.jpg", "texture/mars_bump_map.png", 0.03, "", ""],
  ["Jupiter", 11.21, 46, 11.86, 0.017, "texture/jupiter_map.jpg", "texture/jupiter_bump_map.png", 0.004, "", ""],
  ["Saturn", 9.45, 62, 29.45, 0.015, "texture/saturn_map.jpg", "", 0, "", "texture/saturn_ring.jpg"],
  ["Uranus", 4.01, 78, 84.01, 0.012, "texture/uranus_map.jpg", "", 0, "", ""],
  ["Neptune", 3.88, 94, 164.8, 0.011, "texture/neptune_map.jpg", "", 0, "", ""],
]

let planets = []
let orbits = []
let clickableObjects = []
clickableObjects.push(sun)

function makePlanet(data) {
  let name = data[0]
  let radius = data[1] * 0.45
  let distance = data[2]
  let year = data[3]
  let spin = data[4]
  let map = data[5]
  let bump = data[6]
  let bumpScale = data[7]
  let cloudMap = data[8]
  let ringMap = data[9]

  let geometry = new THREE.SphereGeometry(radius, 64, 64)
  let material = new THREE.MeshPhongMaterial({
    map: loadTexture(map),
    shininess: 5,
  })

  if (bump != "") {
    material.bumpMap = loadTexture(bump)
    material.bumpScale = bumpScale
  }

  let planet = new THREE.Mesh(geometry, material)
  planet.name = name
  planet.userData.distance = distance
  planet.userData.speed = 0.0075 / year
  planet.userData.angle = Math.random() * Math.PI * 2
  planet.userData.spin = spin
  planet.userData.cloud = null

  if (cloudMap != "") {
    let cloudGeometry = new THREE.SphereGeometry(radius * 1.025, 64, 64)
    let cloudMaterial = new THREE.MeshPhongMaterial({
      map: loadTexture(cloudMap),
      transparent: true,
      opacity: 0.58,
    })

    let cloud = new THREE.Mesh(cloudGeometry, cloudMaterial)
    planet.add(cloud)
    planet.userData.cloud = cloud
  }

  if (ringMap != "") {
    let ringGeometry = new THREE.RingGeometry(radius * 1.35, radius * 2.2, 120)
    let ringMaterial = new THREE.MeshBasicMaterial({
      map: loadTexture(ringMap),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.86,
    })

    let ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.rotation.x = Math.PI / 2.6
    planet.add(ring)
  }

  scene.add(planet)
  planets.push(planet)
  clickableObjects.push(planet)
}

function makeOrbit(data) {
  let name = data[0]
  let distance = data[2]
  let points = []

  for (let i = 0; i <= 220; i++) {
    let angle = (Math.PI * 2 * i) / 220
    let x = Math.cos(angle) * distance
    let z = Math.sin(angle) * distance
    points.push(new THREE.Vector3(x, 0, z))
  }

  let geometry = new THREE.BufferGeometry().setFromPoints(points)
  let material = new THREE.LineBasicMaterial({
    color: 0x2a547f,
    transparent: true,
    opacity: 0.38,
  })
  let orbit = new THREE.LineLoop(geometry, material)
  orbit.name = name + " Orbit"
  orbit.userData.targetName = name
  scene.add(orbit)
  orbits.push(orbit)
  clickableObjects.push(orbit)
}

for (let i = 0; i < planetList.length; i++) {
  makePlanet(planetList[i])
  makeOrbit(planetList[i])
}

let asteroidCount = 650
let asteroidGeometry = new THREE.IcosahedronGeometry(0.09, 0)
let asteroidMaterial = new THREE.MeshStandardMaterial({
  color: 0x9b8e81,
  roughness: 0.95,
  metalness: 0.02,
})
let asteroidBelt = new THREE.InstancedMesh(asteroidGeometry, asteroidMaterial, asteroidCount)
let asteroidData = []
let dummy = new THREE.Object3D()

for (let i = 0; i < asteroidCount; i++) {
  let angle = Math.random() * Math.PI * 2
  let radius = 34 + Math.random() * 8.5
  let y = (Math.random() - 0.5) * 1.4
  let scale = 0.35 + Math.random() * 1.2
  let speed = 0.001 + Math.random() * 0.0014

  asteroidData.push([angle, radius, y, scale, speed, 0, 0, 0])

  dummy.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
  dummy.scale.setScalar(scale)
  dummy.updateMatrix()
  asteroidBelt.setMatrixAt(i, dummy.matrix)
}

asteroidBelt.instanceMatrix.needsUpdate = true
scene.add(asteroidBelt)

let stars = new THREE.Group()

for (let i = 0; i < 650; i++) {
  let starGeometry = new THREE.SphereGeometry(0.07, 7, 7)
  let starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
  let star = new THREE.Mesh(starGeometry, starMaterial)
  let spread = 360

  star.position.set(
    (Math.random() - 0.5) * spread,
    (Math.random() - 0.5) * spread,
    (Math.random() - 0.5) * spread
  )

  stars.add(star)
}

scene.add(stars)

let raycaster = new THREE.Raycaster()
raycaster.params.Line.threshold = 0.85

let pointer = new THREE.Vector2()
let highlightedOrbit = null
let isDragging = false
let hasDragged = false
let lastX = 0

function updatePointer(event) {
  let rect = canvas.getBoundingClientRect()
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
}

function highlightOrbit(orbit) {
  if (highlightedOrbit != null) {
    highlightedOrbit.material.color.setHex(0x2a547f)
    highlightedOrbit.material.opacity = 0.38
  }

  highlightedOrbit = orbit

  if (highlightedOrbit != null) {
    highlightedOrbit.material.color.setHex(0x7cd7ff)
    highlightedOrbit.material.opacity = 0.95
  }
}

function getObjectName(object) {
  let current = object

  while (current != null) {
    if (current.userData && current.userData.targetName) {
      return current.userData.targetName
    }

    if (current.name) {
      return current.name
    }

    current = current.parent
  }

  return ""
}

function openPlanet(name) {
  if (name == "Sun") {
    window.location.href = "planets.html?planet=Sun"
  }
  if (name == "Mercury") {
    window.location.href = "planets.html?planet=Mercury"
  }
  if (name == "Venus") {
    window.location.href = "planets.html?planet=Venus"
  }
  if (name == "Earth") {
    window.location.href = "planets.html?planet=Earth"
  }
  if (name == "Mars") {
    window.location.href = "planets.html?planet=Mars"
  }
  if (name == "Jupiter") {
    window.location.href = "planets.html?planet=Jupiter"
  }
  if (name == "Saturn") {
    window.location.href = "planets.html?planet=Saturn"
  }
  if (name == "Uranus") {
    window.location.href = "planets.html?planet=Uranus"
  }
  if (name == "Neptune") {
    window.location.href = "planets.html?planet=Neptune"
  }
}

canvas.addEventListener("mousedown", function (event) {
  isDragging = true
  hasDragged = false
  lastX = event.clientX
  canvas.style.cursor = "grabbing"
})

window.addEventListener("mouseup", function () {
  isDragging = false
  canvas.style.cursor = "grab"
})

window.addEventListener("mousemove", function (event) {
  updatePointer(event)

  if (isDragging) {
    let move = event.clientX - lastX
    lastX = event.clientX

    if (Math.abs(move) > 1) {
      hasDragged = true
    }

    let angle = move * 0.0032
    let x = camera.position.x
    let z = camera.position.z

    camera.position.x = x * Math.cos(angle) - z * Math.sin(angle)
    camera.position.z = x * Math.sin(angle) + z * Math.cos(angle)
    highlightOrbit(null)
    return
  }

  raycaster.setFromCamera(pointer, camera)
  let hits = raycaster.intersectObjects(clickableObjects, true)

  if (hits.length > 0) {
    if (hits[0].object.userData && hits[0].object.userData.targetName) {
      highlightOrbit(hits[0].object)
    } else {
      highlightOrbit(null)
    }
    canvas.style.cursor = "pointer"
  } else {
    highlightOrbit(null)
    canvas.style.cursor = "grab"
  }
})

canvas.addEventListener("click", function (event) {
  if (hasDragged) {
    return
  }

  updatePointer(event)
  raycaster.setFromCamera(pointer, camera)
  let hits = raycaster.intersectObjects(clickableObjects, true)

  if (hits.length > 0) {
    let name = getObjectName(hits[0].object)
    openPlanet(name)
  }
})

canvas.addEventListener("wheel", function (event) {
  event.preventDefault()

  if (event.deltaY > 0) {
    cameraDistance = cameraDistance * 1.08
  } else {
    cameraDistance = cameraDistance * 0.92
  }

  if (cameraDistance < minDistance) {
    cameraDistance = minDistance
  }

  if (cameraDistance > maxDistance) {
    cameraDistance = maxDistance
  }

  let direction = camera.position.clone().normalize()
  camera.position.copy(direction.multiplyScalar(cameraDistance))
  camera.lookAt(0, 0, 0)
})

function resize() {
  let width = canvas.clientWidth
  let height = canvas.clientHeight

  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function animate() {
  requestAnimationFrame(animate)

  sun.rotation.y = sun.rotation.y + 0.0017
  stars.rotation.y = stars.rotation.y + 0.00018

  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i]
    let distance = planet.userData.distance

    planet.userData.angle = planet.userData.angle + planet.userData.speed
    planet.position.x = Math.cos(planet.userData.angle) * distance
    planet.position.z = Math.sin(planet.userData.angle) * distance
    planet.rotation.y = planet.rotation.y + planet.userData.spin

    if (planet.userData.cloud != null) {
      planet.userData.cloud.rotation.y = planet.userData.cloud.rotation.y - planet.userData.spin * 1.2
    }
  }

  for (let i = 0; i < asteroidData.length; i++) {
    let asteroid = asteroidData[i]

    asteroid[0] = asteroid[0] + asteroid[4]
    asteroid[5] = asteroid[5] + 0.004
    asteroid[6] = asteroid[6] + 0.006
    asteroid[7] = asteroid[7] + 0.003

    dummy.position.set(
      Math.cos(asteroid[0]) * asteroid[1],
      asteroid[2],
      Math.sin(asteroid[0]) * asteroid[1]
    )
    dummy.rotation.set(asteroid[5], asteroid[6], asteroid[7])
    dummy.scale.setScalar(asteroid[3])
    dummy.updateMatrix()
    asteroidBelt.setMatrixAt(i, dummy.matrix)
  }

  asteroidBelt.instanceMatrix.needsUpdate = true

  let fade = (cameraDistance - 100) / (maxDistance - 100)

  if (fade < 0) {
    fade = 0
  }

  if (fade > 1) {
    fade = 1
  }

  galaxy.material.opacity = fade * 0.9

  camera.lookAt(0, 0, 0)
  renderer.render(scene, camera)
}

window.addEventListener("resize", resize)
canvas.style.cursor = "grab"
resize()
animate()
