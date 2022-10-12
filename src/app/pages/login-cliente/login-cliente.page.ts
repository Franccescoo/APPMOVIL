import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Apiservices2Service } from 'src/app/services/apiservices2.service';

import { DbservicioService } from 'src/app/services/dbservicio.service';


@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage implements OnInit {
  usuario: any;

  user: string = "";
  clave: string = "";

  validarpass() {
    if (this.usuario.nombre == this.user && this.usuario.clave == this.clave) {
      this.route.navigate(['/home']);
    }
    else {
      this.presentAlert();
    }
  }

  constructor(private alertController: AlertController, private route: Router, private api: Apiservices2Service, private bd: DbservicioService) { }
  ngOnInit() {
    this.api.getUsers().subscribe((res) => {
      if (res) {
        this.usuario = res;



      }
    })
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
