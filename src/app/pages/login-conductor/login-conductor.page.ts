import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-login-conductor',
  templateUrl: './login-conductor.page.html',
  styleUrls: ['./login-conductor.page.scss'],
})


export class LoginConductorPage implements OnInit {

  
  ingreso: any = {
    nombre: '',
    clave: ''
  };


  user:any[];
  constructor(private alertController: AlertController, private router: Router, private bd: DbservicioService,public storage: Storage,private toastController: ToastController) {
   
    


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

  
  async iniciarSesion(){
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
      this.router.navigate(['/home-conductor']);



      // this.router.navigate(['/home']);
      // if (this.user[0].fk_id_rol == 2) {
      //   this.router.navigate(['/home']);
      //   // this.presentToast("Bienvenido "+ this.ingreso.nombre);
      // } else {
      //   if (this.user[0].fk_id_rol == 1) {
      //     this.router.navigate(['/home-conductor']);
      //     // this.presentToast("Bienvenido "+ this.ingreso.nombre);
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