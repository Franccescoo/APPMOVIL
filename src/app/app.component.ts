import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { DbservicioService } from './services/dbservicio.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  idrol='';
  Usuario: any[] = []

  constructor(public nativeStorage: NativeStorage,private bd: DbservicioService,private router: Router) {

    this.guardaridrol()
    this.inicio
    this.mapa
    this.perfil
  }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUser().subscribe(item => {
          this.Usuario = item
        })
      }
    })
  }

  guardaridrol(){
    this.nativeStorage.getItem('idrol').then((data4)=>{
      this.idrol = data4
    })
  }
  inicio(){
    if (this.idrol == "1") {
      this.router.navigate(['/inicio-conductor']);
    } else {
      if (this.idrol == "2") {
        this.router.navigate(['/inicio-cliente']);
      }

    }
  }
  mapa(){
    if (this.idrol == "1") {
      this.router.navigate(['/mapa-conductor']);
    } else {
      if (this.idrol == "2") {
        this.router.navigate(['/mapa-cliente']);
      }

    }
  }
  perfil(){
    if (this.idrol == "1") {
      this.router.navigate(['/modificar-conductor']);
    } else {
      if (this.idrol == "2") {
        this.router.navigate(['/modificar-cliente']);
      }

    }
  }

}
