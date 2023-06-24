import 'bootstrap';
import './index.scss'


function initMap() {
  // The location of Uluru
  const target = { lat: 50.068056, lng: 19.945528 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: target,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: target,
    map: map,
  });
}

window.initMap = initMap;