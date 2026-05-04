let canvas = document.getElementById("c")

let planetName = "Earth"
let planetUrl = new URLSearchParams(window.location.search)
let planetFromUrl = planetUrl.get("planet")

if (planetFromUrl != null) {
  planetName = planetFromUrl
}

planetName = planetName.toLowerCase()

let map = "texture/earth_map.jpg"
let bump = "texture/earth_bump_map.jpg"
let bumpScale = 0.03
let spin = 0.0016
let useBasicMaterial = false

let cloudMap = ""
let cloudSpin = 0

let ringMap = ""
let ringInner = 0
let ringOuter = 0

if (planetName == "sun") {
  map = "texture/sun_map.jpg"
  bump = ""
  spin = 0.0025
  useBasicMaterial = true
}

if (planetName == "mercury") {
  map = "texture/mercury_map.png"
  bump = "texture/mercury_bump_map.png"
  bumpScale = 0.02
  spin = 0.002
}

if (planetName == "venus") {
  map = "texture/venus_map.jpg"
  bump = "texture/venus_bump_map.png"
  bumpScale = 0.02
  spin = 0.0017
  cloudMap = "texture/venus_atmosphere.jpg"
  cloudSpin = 0.001
}

if (planetName == "earth") {
  map = "texture/earth_map.jpg"
  bump = "texture/earth_bump_map.jpg"
  bumpScale = 0.03
  spin = 0.0016
  cloudMap = "texture/earth_cloud.jpg"
  cloudSpin = -0.0018
}

if (planetName == "mars") {
  map = "texture/mars_map.jpg"
  bump = "texture/mars_bump_map.png"
  bumpScale = 0.03
  spin = 0.0018
}

if (planetName == "jupiter") {
  map = "texture/jupiter_map.jpg"
  bump = "texture/jupiter_bump_map.png"
  bumpScale = 0.004
  spin = 0.0022
}

if (planetName == "saturn") {
  map = "texture/saturn_map.jpg"
  bump = ""
  spin = 0.0019
  ringMap = "texture/saturn_ring.jpg"
  ringInner = 0.84
  ringOuter = 1.15
}

if (planetName == "uranus") {
  map = "texture/uranus_map.jpg"
  bump = ""
  spin = 0.0017
}

if (planetName == "neptune") {
  map = "texture/neptune_map.jpg"
  bump = ""
  spin = 0.0017
}

let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
camera.position.z = 2.2

let renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
})

renderer.setClearColor(0x000000, 0)

let loader = new THREE.TextureLoader()
let planetTexture = loader.load(map)
let radius = 0.66
let geometry = new THREE.SphereGeometry(radius, 96, 96)
let material

if (useBasicMaterial) {
  material = new THREE.MeshBasicMaterial({
    map: planetTexture,
  })
} else {
  material = new THREE.MeshPhongMaterial({
    map: planetTexture,
    shininess: 5,
  })

  if (bump != "") {
    material.bumpMap = loader.load(bump)
    material.bumpScale = bumpScale
  }
}

let planet = new THREE.Mesh(geometry, material)
scene.add(planet)

let ambientLight = new THREE.AmbientLight(0xffffff, 0.28)
scene.add(ambientLight)

let light = new THREE.PointLight(0xffffff, 1.05)
light.position.set(5, 3, 5)
scene.add(light)

let cloud = null

if (cloudMap != "") {
  let cloudGeometry = new THREE.SphereGeometry(radius * 1.03, 96, 96)
  let cloudMaterial = new THREE.MeshPhongMaterial({
    map: loader.load(cloudMap),
    transparent: true,
    opacity: 0.6,
  })

  cloud = new THREE.Mesh(cloudGeometry, cloudMaterial)
  scene.add(cloud)
}

if (ringMap != "") {
  let ringGeometry = new THREE.RingGeometry(ringInner, ringOuter, 96)
  let ringMaterial = new THREE.MeshBasicMaterial({
    map: loader.load(ringMap),
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.85,
  })

  let ring = new THREE.Mesh(ringGeometry, ringMaterial)
  ring.rotation.x = Math.PI / 2.6
  planet.add(ring)
}

let spaceGeometry = new THREE.SphereGeometry(80, 64, 64)
let spaceMaterial = new THREE.MeshBasicMaterial({
  map: loader.load("texture/galaxy.png"),
  side: THREE.BackSide,
})
let space = new THREE.Mesh(spaceGeometry, spaceMaterial)
scene.add(space)

function resize() {
  let width = canvas.clientWidth
  let height = canvas.clientHeight

  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function animate() {
  requestAnimationFrame(animate)

  planet.rotation.y = planet.rotation.y + spin
  space.rotation.y = space.rotation.y + 0.00035

  if (cloud != null) {
    cloud.rotation.y = cloud.rotation.y + cloudSpin
  }

  renderer.render(scene, camera)
}

window.addEventListener("resize", resize)
resize()
animate()
