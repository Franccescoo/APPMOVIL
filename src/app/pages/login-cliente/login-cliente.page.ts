import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage implements OnInit {

  user: string = "";
  clave: string ="";

  validarpass(){
    if (this.user == "matias" && this.clave == "123") {
      this.route.navigate(['/home']);
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
