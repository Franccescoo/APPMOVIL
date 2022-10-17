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
  nombre1:"Julio";
  apellido1:"Baez";

  user:any[] =[]
  id: any;
  constructor(private bd: DbservicioService,private api: CameraService,private router: Router,private activedRouter: ActivatedRoute) { 
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.id = this.router.getCurrentNavigation().extras.state.idEnviado;
      }
    })
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