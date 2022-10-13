import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Apiservices2Service } from 'src/app/services/apiservices2.service';

import { DbservicioService } from 'src/app/services/dbservicio.service';


@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage implements OnInit {
  usuario: any = {
    id: '',
    nombre: '',
    clave: '',
    idRol: ''
  };

  ingreso: any = {
    nombre: '',
    clave: ''
  };


  //validarpass() {
  //if (this.usuario.nombre == this.login.nombre && this.usuario.clave == this.login.contra) {
  //    this.router.navigate(['/home']);
  //  }
  //  else {
  //    this.presentAlert();
  //  }
  //}

  constructor(private alertController: AlertController, private router: Router, private api: Apiservices2Service, private bd: DbservicioService) {
  
    this.subsUsuario();


  }
  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUsuario().subscribe((item) => {
          this.usuario = item;
        })
      }
    });
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
  User() {
    let navigationExtras: NavigationExtras = {
      state: { log0: this.ingreso.nombre, log1: this.ingreso.clave }
    }
    this.router.navigate(['/home'], navigationExtras)
  }

  async ingresar() {
    const response = await this.bd.login(this.ingreso.nombre, this.ingreso.clave)
    response ? this.User() : this.bd.presentToast("Credenciales incorrectar Compruebe su Rut y/o contraseña")
  }
  subsUsuario() {
    this.api.getUsers().subscribe((res) => {
      if (res) {
        this.usuario = res;
        this.bd.agregarUsuario(this.usuario.id, this.usuario.nombre, this.usuario.clave, this.usuario.idRol);
      }
    })
  }


}
