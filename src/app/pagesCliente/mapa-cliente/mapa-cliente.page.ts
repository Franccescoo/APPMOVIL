import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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
  selector: 'app-mapa-cliente',
  templateUrl: './mapa-cliente.page.html',
  styleUrls: ['./mapa-cliente.page.scss'],
})
export class MapaClientePage implements OnInit {

  map: any;
  locationService: any;

  public latitude;
  public longitude;

  constructor(public geolocation: Geolocation,public toastController: ToastController) { 

    this.geolocationNative()
    this.loadMap()
  }

  ngAfterViewInit() {
    this.geolocationNative();
  }

  ngOnInit(){
      this.loadMap();
  }

  geolocationNative() {
    this.geolocation.getCurrentPosition().then((geposition: Geoposition) =>{
      this.latitude = geposition.coords.latitude
      this.longitude = geposition.coords.longitude

      console.log(geposition);
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Tus coordenadas son: lat ' + this.latitude + ' y lng: ' + this.longitude,
      duration: 2000
    });
    toast.present();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: this.latitude, lng: -this.longitude};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 13
    });

    this.geolocation.getCurrentPosition().then((geposition: Geoposition) =>{
      this.latitude = geposition.coords.latitude
      this.longitude = geposition.coords.longitude

      console.log(geposition);
    })

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const market = {
        position: {
          lat: this.latitude,
          lng: this.longitude
        },
        title: 'Tu ubicación'
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

