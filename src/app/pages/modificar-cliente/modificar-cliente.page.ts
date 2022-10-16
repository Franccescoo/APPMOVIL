import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';


@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.page.html',
  styleUrls: ['./modificar-cliente.page.scss'],
})
export class ModificarClientePage implements OnInit {
  foto: any;
  user:any[] =[]

  listaNoticias: any = [
    {
      user: ''
    }
  ]


  constructor(private bd: DbservicioService,private api: CameraService,  private router: Router) { }

  ngOnInit() {
    this.api.getfoto().subscribe(item => {
      this.foto = item;
    })

    this.bd.dbState().subscribe((res) => {
      if (res){
        this.bd.fetchUser().subscribe(item => {
          this.user = item;
        })
      }
    })
  }

  AbrirCamara() {
    this.api.TakePicture();
  }

  Datos(){
    this.bd.id(1)
    state: {
      user: this.bd.usuario1
    }
  }


}