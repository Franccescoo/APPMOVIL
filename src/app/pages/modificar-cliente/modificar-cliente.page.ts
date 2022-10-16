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
  user:any[] =[]
  username: "";



  constructor(private bd: DbservicioService,private api: CameraService,  private router: Router,private activedRouter: ActivatedRoute) { 

    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.username = this.router.getCurrentNavigation().extras.state.username;

      }
    })

  }

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

  Datos(x){

    let navigationsExtras: NavigationExtras ={
      state: {
        nombre: x.username,
      }
    }
  }


}