
const options = {
  dragging: false,
  touchzoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}
const Lat = document.querySelector('span[data-lat]').dataset.lat;
const Lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map("mapid", options).setView([Lat, Lng], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
).addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});



//create and add marker

L.marker([Lat, Lng], { icon })
.addTo(map)

// image gallery 

function selectImage (event) {
  const  button = event.currentTarget

  // remove all class active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass (button) {
    button.classList.remove("active")
  }

  // select clicked img
    const image = button.children[0]

    const imageContainer = document.querySelector(".orphanage-details > img")
  // update container image
    imageContainer.src = image.src
  // add class active to button
  button.classList.add("active")
}
