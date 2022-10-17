import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { DbservicioService } from '../services/dbservicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // user:any[] =[]
  // public latitude;
  // public longitude;
  // id: any;
a
  constructor(public nativeStorage: NativeStorage,private router: Router,public geolocation: Geolocation, private activedRouter: ActivatedRoute, private bd: DbservicioService) {

    // this.activedRouter.queryParams.subscribe(param=>{
    //   if(this.router.getCurrentNavigation().extras.state){
    //     this.id = this.router.getCurrentNavigation().extras.state.idEnviado;
    //   }
    // })
    //this.Ubicacion();
    // this.router.navigate(['home/inicio']);
    this.router.navigate(['home/inicio']);
  }
  ngOnInit() {
    // this.bd.dbState().subscribe((res) => {
    //   if (res){
    //     this.bd.fetchUser().subscribe(item => {
    //       this.user = item;
    //     })
    //   }
      
    // })
    
  }

  // perfiluser(){
  //   let navigationsExtras: NavigationExtras = {
  //     state: {
  //       id:this.id

  //     }
  //   }
  //   this.router.navigate(['/modificar-cliente'],navigationsExtras);
  // }


  

  // Ubicacion() {
  //   this.geolocation.getCurrentPosition().then((geposition: Geoposition) =>{
  //     this.latitude = geposition.coords.latitude
  //     this.longitude = geposition.coords.longitude

  //     console.log(geposition);
  //   })
  //   this.nativeStorage.setItem('lat', this.latitude);
  //   this.nativeStorage.setItem('lng', this.longitude);

  // }
  // editar(x){
  //   let navigationsExtras: NavigationExtras ={
  //     state:{
  //       idEnviado2: x.id,
  //       nombreenviado: x.nombre,
  //       usernameneviado: x.username
  //     }
  //   }
  //   this.router.navigate(['/modificar-cliente'],navigationsExtras);
  // }


  

  segmentChanged($event){
    const direccion = $event.detail.value;
    this.router.navigate(['home/' + direccion]);
  }

}

