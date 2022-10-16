import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Apiservices2Service } from 'src/app/services/apiservices2.service';

import { DbservicioService } from 'src/app/services/dbservicio.service';


@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage implements OnInit {

  ingreso: any = {
    nombre: '',
    clave: ''
  };

  ListaDatos: any = [
    {
      idUsuario: '',
      nombre: '',
      username: '',
    }
  ]


  user:any[] =[]
  constructor(private alertController: AlertController, private router: Router, private api: Apiservices2Service, private bd: DbservicioService,public storage: Storage,private toastController: ToastController) {
   



  }
  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res){
        this.bd.fetchUser().subscribe(item => {
          this.user = item;
        })
      }
    })
  }

  
  async iniciarSesion(x){
    await this.bd.login(this.ingreso.nombre, this.ingreso.clave);
    if (this.ingreso.nombre.length == 0) {
        this.presentToast("Por favor Ingrese su nombre de Usuario");
    }
    else if(this.ingreso.clave == 0){
      this.presentToast("Ingrese Su Contraseña");
    }
    else if(this.user.length == 0){
      this.presentToast("Usuario y/o Contraseña incorrecta");
    }else{
      //let navigationsExtras: NavigationExtras ={
      //  state: {
      //    idEnviado: x.idUsuario,
      //    nombreEnviado: x.nombre,
      //    usernameEnviado: x.username
      //  }
      //}
      //this.router.navigate(['/home'], navigationsExtras);

      this.router.navigate(['/home']);

      // if (this.user[0].fk_id_tipousuario == 2) {
      //   this.router.navigate(['/home']);
      //   this.presentToast("Bienvenido "+ this.ingreso.nombre);
      // } else {
      //   if (this.user[0].fk_id_tipousuario == 1) {
      //     this.router.navigate(['/home']);
      //     this.presentToast("Bienvenido "+ this.ingreso.nombre);
      //   }
      
  
      // }
    
  
    }
  }
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000

    });
    toast.present();
  }

}
