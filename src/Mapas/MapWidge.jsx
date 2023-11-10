import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';




export class MapWidget {


  constructor(domNode) {
    this.map = L.map(domNode, {
      zoomControl: false,
      doubleClickZoom: false,
      boxZoom: true,
      keyboard: false,
      scrollWheelZoom: true,
      zoomAnimation: true,
      touchZoom: true,
      zoomSnap: 0.9
    })
    

   
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);
    this.map.setView([-41.505, -59], 13);

    L.marker([-11.5, -79]).addTo(this.map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

  
  }
  setZoom(level) {
    this.map.setZoom(level);
  }
}
