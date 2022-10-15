import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public latitude;
  public longitude;

  constructor(public nativeStorage: NativeStorage,private router: Router,public geolocation: Geolocation) {
    this.Ubicacion();
    this.router.navigate(['home/inicio']);
  }

  Ubicacion() {
    this.geolocation.getCurrentPosition().then((geposition: Geoposition) =>{
      this.latitude = geposition.coords.latitude
      this.longitude = geposition.coords.longitude

      console.log(geposition);
    })
    this.nativeStorage.setItem('lat', this.latitude);
    this.nativeStorage.setItem('lng', this.longitude);

  }

  segmentChanged($event){
    const direccion = $event.detail.value;
    this.router.navigate(['home/' + direccion]);
  }

}

