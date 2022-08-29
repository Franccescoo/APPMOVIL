import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-conductor',
  templateUrl: './login-conductor.page.html',
  styleUrls: ['./login-conductor.page.scss'],
})


export class LoginConductorPage implements OnInit {

  user: string = "";
  clave: string ="";

  validarpass(){
    if (this.user == "matias" && this.clave == "123") {
      this.route.navigate(['/home-conductor']);
    }
    else {
      this.presentAlert();
    }
  }

  constructor(private alertController: AlertController,private route:Router) {}
  ngOnInit() {
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Contraseña y/o Usuario',
      message: 'INCORRECTA',
      buttons: ['OK'],
    });

    await alert.present();

}
}