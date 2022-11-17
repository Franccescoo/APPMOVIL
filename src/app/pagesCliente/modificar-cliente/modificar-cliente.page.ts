import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { LoadingController } from '@ionic/angular';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';
import { Storage } from '@ionic/storage';
import { subscribeOn } from 'rxjs/operators';



@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.page.html',
  styleUrls: ['./modificar-cliente.page.scss'],
})
export class ModificarClientePage implements OnInit {


  // foto: any;
  id = '';
  nombre = '';
  clave = '';
  idrol = '';

  // usuarios: any=[{
  //   id: '',
  //   nombre:'',
  //   clave:'',
  //   id_rol:''
  // }];

  Usuario: any[] = []

  constructor(private bd: DbservicioService, private api: CameraService, private router: Router, public nativeStorage: NativeStorage) {

    this.guardarid()
    this.guardarnombre()
    this.guardaridrol()
  }
  // this.api.getfoto().subscribe(item => {
  //   this.foto = item;    
  // })
  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUser().subscribe(item => {
          this.Usuario = item;

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

  guardarclave(){
    this.nativeStorage.getItem('clave').then((data3)=>{
      this.clave = data3
    })
  }


  guardaridrol() {
    this.nativeStorage.getItem('idrol').then((data4) => {
      this.idrol = data4
    })
  }






  // AbrirCamara() {
  //   this.api.TakePicture();
  // }


  // nombreUsuario;
  // getNombreUsuario(){
  //   this.nombreUsuario = this.storage.get('nombre_usuario');
  // }

}