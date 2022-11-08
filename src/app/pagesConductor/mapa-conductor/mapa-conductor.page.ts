import { Component, OnInit } from '@angular/core';

declare let google;
interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}
@Component({
  selector: 'app-mapa-conductor',
  templateUrl: './mapa-conductor.page.html',
  styleUrls: ['./mapa-conductor.page.scss'],
})
export class MapaConductorPage implements OnInit {

  map = null;

  constructor() {}

  ngOnInit(){
      this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -33.36326318588252, lng: -70.67801166481883};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 13
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const market = {
        position: {
          lat: -33.36326318588252,
          lng: -70.67801166481883,
        },
        title: 'Duoc UC: Sede Plaza Norte'
      };
      this.addMarker(market);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
}