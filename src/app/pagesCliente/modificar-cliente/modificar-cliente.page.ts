import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';


@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.page.html',
  styleUrls: ['./modificar-cliente.page.scss'],
})
export class ModificarClientePage implements OnInit {
  foto: any;


  usuarios: any=[{
    id: '',
    nombre:'',
    clave:'',
    id_rol:''
  }];
  usuario = localStorage.getItem("usuario");

  constructor(private bd: DbservicioService,private api: CameraService,private router: Router,private activedRouter: ActivatedRoute) {}

  ngOnInit() {
    this.api.getfoto().subscribe(item => {
      this.foto = item;
      console.log("usuario: ", this.usuarios)
    })
    

  }

  AbrirCamara() {
    this.api.TakePicture();
  }

}