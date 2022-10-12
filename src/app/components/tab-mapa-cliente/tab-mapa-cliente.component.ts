import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';


declare let google;

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}
@Component({
  selector: 'app-tab-mapa-cliente',
  templateUrl: './tab-mapa-cliente.component.html',
  styleUrls: ['./tab-mapa-cliente.component.scss'],
})
export class TabMapaClienteComponent implements OnInit {
  map: any;
  locationService: any;
  latitude: any;
  longitude: any;

  constructor(public geolocation: Geolocation) { }

  ngAfterViewInit() {
    this.geolocationNative();
  }

  ngOnInit(){
      this.loadMap();
      
  }

  geolocationNative() {
    this.geolocation.getCurrentPosition().then((geposition: Geoposition) =>{

      console.log(geposition);
    })
  }

  Coord(pos){
      var lng = pos.coords.longitude;
      var lat = pos.coords.latitude;
      const msg = 'You appear to be at longitude: ' + lng + ' and latitude: ' + lat;

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

