import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  fotocon: any;


  nombremod='';
  id1=''
  id = '';
  nombre = '';
  clave = '';
  idrol = '';
  Usuario: any[] = []

  constructor(private bd: DbservicioService, private api: CameraService, public nativeStorage: NativeStorage, private router: Router) {
    this.nativeStorage.getItem('id').then((data) => {
      this.id = data
    })
    this.nativeStorage.getItem('id1').then((data) => {
      this.id1 = data
    })
    this.guardarnombre()
    this.guardaridrol()
  }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUser().subscribe(item => {
          this.Usuario = item;
          this.nativeStorage.setItem('id1',this.Usuario[0].idusuario)
        })
      }
    })

  }


  guardarid() {
    this.nativeStorage.getItem('id').then((data) => {
      this.id = data
    })
  }
  guardarnombre() {
    this.nativeStorage.getItem('nombre').then((data2) => {
      this.nombre = data2
    })
  }

  guardarclave() {
    this.nativeStorage.getItem('clave').then((data3) => {
      this.clave = data3
    })
  }


  guardaridrol() {
    this.nativeStorage.getItem('idrol').then((data4) => {
      this.idrol = data4
    })
  }

  AbrirCamara() {
    this.api.TakePicture();
  }

  
  Editar(x) {
    let navigationExtras: NavigationExtras = {
      state: {
        idenviado:  x.idUsuario, 
        nombreenviado:  x.nombre,
        claveenviado:  x.clave ,
        fotoenviado:  x.foto ,
        idrolenviado: x.fk_id_rol}
    }
    this.router.navigate(['/modificar-conductor'], navigationExtras);
  }
}
