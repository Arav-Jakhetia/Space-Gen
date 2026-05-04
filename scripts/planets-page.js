let planetDetails = {
    Sun: {
      lead: "The Sun is the star at the center of our solar system and contains nearly all of its mass.",
      facts: [
        { label: "Radius", value: "695,700 km" },
        { label: "Rotation Period", value: "~27 days" },
        { label: "Surface Temp", value: "5,778 K" },
        { label: "Type", value: "G2V Main-Sequence" },
        { label: "Age", value: "~4.6 billion years" },
        { label: "Core Temp", value: "~15 million K" },
      ],
      note: "These values are approximate and intended for educational use in this project simulation.",
      details: [
        {
          title: "Composition",
          text: "The Sun is mostly hydrogen and helium. Nuclear fusion in its core converts hydrogen into helium and releases vast energy.",
        },
        {
          title: "Structure",
          text: "Its layers include the core, radiative zone, convective zone, photosphere, chromosphere, and corona.",
        },
        {
          title: "Solar Activity",
          text: "Sunspots, solar flares, and coronal mass ejections can affect space weather and technology near Earth.",
        },
        {
          title: "Importance",
          text: "Solar radiation powers Earth's climate system and drives photosynthesis, making life possible.",
        },
      ],
    },
    Mercury: {
      lead: "Mercury is the closest planet to the Sun and has a heavily cratered rocky surface.",
      facts: [
        { label: "Radius", value: "2,439.7 km" },
        { label: "Day Length", value: "58.6 Earth days" },
        { label: "Orbital Period", value: "88 Earth days" },
        { label: "Natural Satellites", value: "0" },
        { label: "Surface Gravity", value: "3.7 m/s^2" },
        { label: "Avg. Distance to Sun", value: "57.9 million km" },
      ],
      note: "These values are approximate and intended for educational use in this project simulation.",
      details: [
        {
          title: "Atmosphere",
          text: "Mercury has a very thin exosphere made of atoms blasted from its surface by solar wind and meteoroids.",
        },
        {
          title: "Surface",
          text: "Its surface shows many impact craters, cliffs, and ancient lava plains shaped by early solar-system events.",
        },
        {
          title: "Temperature",
          text: "Without a thick atmosphere, temperatures vary dramatically between intense daytime heat and extreme nighttime cold.",
        },
        {
          title: "Magnetic Field",
          text: "Mercury has a global magnetic field, suggesting a partially molten metallic core.",
        },
      ],
    },
    Venus: {
      lead: "Venus is similar in size to Earth but has a dense atmosphere and an extreme greenhouse climate.",
      facts: [
        { label: "Radius", value: "6,051.8 km" },
        { label: "Day Length", value: "243 Earth days (retrograde)" },
        { label: "Orbital Period", value: "224.7 Earth days" },
        { label: "Natural Satellites", value: "0" },
        { label: "Surface Gravity", value: "8.87 m/s^2" },
        { label: "Avg. Distance to Sun", value: "108.2 million km" },
      ],
      note: "These values are approximate and intended for educational use in this project simulation.",
      details: [
        {
          title: "Atmosphere",
          text: "Venus atmosphere is mostly carbon dioxide with thick sulfuric-acid clouds, causing very high surface pressure.",
        },
        {
          title: "Surface",
          text: "Volcanic plains, broad highlands, and deformed terrains indicate extensive past resurfacing and tectonic activity.",
        },
        {
          title: "Temperature",
          text: "Its runaway greenhouse effect keeps surface temperatures hot enough to melt lead.",
        },
        {
          title: "Rotation",
          text: "Venus rotates very slowly and in the opposite direction compared with most planets in the solar system.",
        },
      ],
    },
    Earth: {
      lead: "The third planet from the Sun and the only known world supporting life.",
      facts: [
        { label: "Radius", value: "6,371 km" },
        { label: "Day Length", value: "23h 56m" },
        { label: "Orbital Period", value: "365.25 days" },
        { label: "Natural Satellite", value: "Moon (1)" },
        { label: "Surface Gravity", value: "9.81 m/s^2" },
        { label: "Avg. Distance to Sun", value: "149.6 million km" },
      ],
      note: "Atmosphere composition is primarily nitrogen and oxygen, creating the conditions for liquid water and global weather systems.",
      details: [
        {
          title: "Atmosphere",
          text: "Earth's atmosphere is about 78% nitrogen, 21% oxygen, and trace gases. It shields the surface from harmful radiation and helps regulate temperature.",
        },
        {
          title: "Surface & Water",
          text: "Roughly 71% of Earth is covered by water. Oceans store heat, drive weather, and support marine ecosystems across a wide range of climates.",
        },
        {
          title: "Climate & Seasons",
          text: "Earth's 23.5-degree axial tilt creates seasons. Solar energy distribution varies through the year, shaping regional climate patterns.",
        },
        {
          title: "Magnetic Field",
          text: "A dynamic iron core generates a magnetic field that deflects charged solar particles and helps protect the atmosphere over long timescales.",
        },
      ],
    },
    Mars: {
      lead: "Mars is a cold desert world known for iron-oxide dust, giant volcanoes, and ancient water-carved terrain.",
      facts: [
        { label: "Radius", value: "3,389.5 km" },
        { label: "Day Length", value: "24h 37m" },
        { label: "Orbital Period", value: "687 Earth days" },
        { label: "Natural Satellites", value: "2 (Phobos, Deimos)" },
        { label: "Surface Gravity", value: "3.71 m/s^2" },
        { label: "Avg. Distance to Sun", value: "227.9 million km" },
      ],
      note: "These values are approximate and intended for educational use in this project simulation.",
      details: [
        {
          title: "Atmosphere",
          text: "Mars has a thin atmosphere dominated by carbon dioxide, with dust that strongly influences weather and visibility.",
        },
        {
          title: "Surface",
          text: "It hosts Olympus Mons and Valles Marineris, plus many valleys and minerals linked to ancient water activity.",
        },
        {
          title: "Climate",
          text: "Seasonal polar caps expand and shrink as carbon dioxide frost forms and sublimates each Martian year.",
        },
        {
          title: "Exploration",
          text: "Mars has been a major target for orbiters, landers, and rovers searching for signs of past habitability.",
        },
      ],
    },
    Jupiter: {
      lead: "Jupiter is the largest planet, a gas giant with powerful storms and a massive magnetosphere.",
      facts: [
        { label: "Radius", value: "69,911 km" },
        { label: "Day Length", value: "9h 56m" },
        { label: "Orbital Period", value: "11.86 Earth years" },
        { label: "Natural Satellites", value: "95+ known" },
        { label: "Surface Gravity", value: "24.79 m/s^2" },
        { label: "Avg. Distance to Sun", value: "778.5 million km" },
      ],
      note: "These values are approximate and intended for educational use in this project simulation.",
      details: [
        {
          title: "Atmosphere",
          text: "Hydrogen and helium dominate Jupiter atmosphere, with colorful cloud bands shaped by strong jet streams.",
        },
        {
          title: "Great Red Spot",
          text: "A giant long-lived storm larger than Earth, rotating in Jupiter southern hemisphere.",
        },
        {
          title: "Interior",
          text: "Deep pressure likely forms metallic hydrogen, helping generate Jupiter very strong magnetic field.",
        },
        {
          title: "System Role",
          text: "Its gravity influences asteroid and comet paths and strongly shapes the architecture of the outer solar system.",
        },
      ],
    },
    Saturn: {
      lead: "Saturn is a gas giant famous for its bright ring system composed of ice and rocky particles.",
      facts: [
        { label: "Radius", value: "58,232 km" },
        { label: "Day Length", value: "~10h 33m" },
        { label: "Orbital Period", value: "29.46 Earth years" },
        { label: "Natural Satellites", value: "146 known" },
        { label: "Surface Gravity", value: "10.44 m/s^2" },
        { label: "Avg. Distance to Sun", value: "1.43 billion km" },
      ],
      note: "These values are approximate and intended for educational use in this project simulation.",
      details: [
        {
          title: "Rings",
          text: "Saturn rings are divided into multiple major groups and countless thin ringlets with complex structure.",
        },
        {
          title: "Atmosphere",
          text: "Like Jupiter, Saturn is mostly hydrogen and helium with banded clouds and high-speed winds.",
        },
        {
          title: "Moons",
          text: "Its moon system includes Titan and Enceladus, both important targets in the search for habitable environments.",
        },
        {
          title: "Density",
          text: "Saturn mean density is lower than water, making it the least dense of the major planets.",
        },
      ],
    },
    Uranus: {
      lead: "Uranus is an ice giant that rotates on its side, giving it extreme and unusual seasonal patterns.",
      facts: [
        { label: "Radius", value: "25,362 km" },
        { label: "Day Length", value: "17h 14m (retrograde)" },
        { label: "Orbital Period", value: "84 Earth years" },
        { label: "Natural Satellites", value: "27 known" },
        { label: "Surface Gravity", value: "8.69 m/s^2" },
        { label: "Avg. Distance to Sun", value: "2.87 billion km" },
      ],
      note: "These values are approximate and intended for educational use in this project simulation.",
      details: [
        {
          title: "Tilt",
          text: "Uranus axial tilt is about 98 degrees, so each pole can face the Sun for long periods during its orbit.",
        },
        {
          title: "Atmosphere",
          text: "Methane in the upper atmosphere gives Uranus its cyan-blue appearance by absorbing red wavelengths.",
        },
        {
          title: "Interior",
          text: "As an ice giant, Uranus interior likely contains water, ammonia, and methane-rich fluid layers.",
        },
        {
          title: "Magnetosphere",
          text: "Its magnetic field is offset and tilted, producing a highly asymmetric magnetosphere.",
        },
      ],
    },
    Neptune: {
      lead: "Neptune is a distant ice giant with strong winds and active weather systems in a cold outer orbit.",
      facts: [
        { label: "Radius", value: "24,622 km" },
        { label: "Day Length", value: "16h 6m" },
        { label: "Orbital Period", value: "164.8 Earth years" },
        { label: "Natural Satellites", value: "14 known" },
        { label: "Surface Gravity", value: "11.15 m/s^2" },
        { label: "Avg. Distance to Sun", value: "4.50 billion km" },
      ],
      note: "These values are approximate and intended for educational use in this project simulation.",
      details: [
        {
          title: "Atmosphere",
          text: "Neptune atmosphere is hydrogen, helium, and methane, with clouds and storms that change over time.",
        },
        {
          title: "Winds",
          text: "It has some of the fastest measured winds in the solar system, despite receiving little solar energy.",
        },
        {
          title: "Moon Triton",
          text: "Triton orbits retrograde and likely originated in the Kuiper Belt before capture by Neptune.",
        },
        {
          title: "Color",
          text: "Methane absorption and atmospheric scattering contribute to Neptune deep blue color.",
        },
      ],
    },
}

function getPlanetName(rawValue) {
  if (!rawValue) {
    return "Earth"
  }

  let input = String(rawValue).trim().toLowerCase()
  let names = Object.keys(planetDetails)

  for (let i = 0; i < names.length; i++) {
    let name = names[i]

    if (name.toLowerCase() == input) {
      return name
    }
  }

  return "Earth"
}

let url = new URLSearchParams(window.location.search)
let queryPlanet = url.get("planet")
let selectedPlanet = getPlanetName(queryPlanet)
let selectedData = planetDetails[selectedPlanet]

let nameEl = document.getElementById("planet-name")
let leadEl = document.getElementById("planet-lead")
let factsEl = document.getElementById("planet-facts")
let noteEl = document.getElementById("planet-note")
let detailsEl = document.getElementById("planet-details")
let viewerEl = document.getElementById("planet-viewer")
let panelEl = document.getElementById("planet-info-panel")

if (nameEl) {
  nameEl.innerHTML = selectedPlanet
}

if (leadEl) {
  leadEl.innerHTML = selectedData.lead
}

if (noteEl) {
  noteEl.innerHTML = selectedData.note
}

if (viewerEl) {
  viewerEl.setAttribute("aria-label", selectedPlanet + " simulation")
}

if (panelEl) {
  panelEl.setAttribute("aria-label", selectedPlanet + " details")
}

if (factsEl) {
  factsEl.innerHTML = ""

  for (let i = 0; i < selectedData.facts.length; i++) {
    let fact = selectedData.facts[i]

    let article = document.createElement("article")
    article.className = "fact"

    let heading = document.createElement("h2")
    heading.innerHTML = fact.label
    article.appendChild(heading)

    let value = document.createElement("p")
    value.innerHTML = fact.value
    article.appendChild(value)

    factsEl.appendChild(article)
  }
}

if (detailsEl) {
  detailsEl.innerHTML = ""

  for (let i = 0; i < selectedData.details.length; i++) {
    let section = selectedData.details[i]

    let sectionEl = document.createElement("section")
    sectionEl.className = "detail-section"

    let heading = document.createElement("h3")
    heading.innerHTML = section.title
    sectionEl.appendChild(heading)

    let text = document.createElement("p")
    text.innerHTML = section.text
    sectionEl.appendChild(text)

    detailsEl.appendChild(sectionEl)
  }
}

document.title = selectedPlanet + " | Space Gen"