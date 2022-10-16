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

  constructor(private bd: DbservicioService,private api: CameraService) { 

  }

  ngOnInit() {
    this.api.getfoto().subscribe(item => {
      this.foto = item;
    })

  }

  AbrirCamara() {
    this.api.TakePicture();
  }

}