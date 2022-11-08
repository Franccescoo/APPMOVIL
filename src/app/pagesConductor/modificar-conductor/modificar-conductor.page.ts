import { Component, OnInit } from '@angular/core';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-modificar-conductor',
  templateUrl: './modificar-conductor.page.html',
  styleUrls: ['./modificar-conductor.page.scss'],
})
export class ModificarConductorPage implements OnInit {
  fotocon: any;

  constructor(private bd: DbservicioService,private api: CameraService) { 

  }

  ngOnInit() {
    this.api.getfoto().subscribe(item => {
      this.fotocon = item;
    })

  }

  AbrirCamara() {
    this.api.TakePicture();
  }

}