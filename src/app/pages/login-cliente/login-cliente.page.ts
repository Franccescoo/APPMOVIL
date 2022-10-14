import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
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


  //validarpass() {
  //if (this.usuario.nombre == this.login.nombre && this.usuario.clave == this.login.contra) {
  //    this.router.navigate(['/home']);
  //  }
  //  else {
  //    this.presentAlert();
  //  }
  //}

  constructor(private alertController: AlertController, private router: Router, private api: Apiservices2Service, private bd: DbservicioService,public storage: Storage) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.ingreso.nombre = this.router.getCurrentNavigation().extras.state.log0;
      this.ingreso.clave = this.router.getCurrentNavigation().extras.state.log1;
   }
    


  }
  ngOnInit() {
  }



  User() {
    let navigationExtras: NavigationExtras = {
      state: { log0: this.ingreso.nombre, log1: this.ingreso.clave }
    }
    this.router.navigate(['/home'], navigationExtras)
  }

  async ingresar() {
    const response = await this.bd.login(this.ingreso.nombre, this.ingreso.clave)
    response ? this.User() : this.bd.presentToast("Credenciales incorrectar Compruebe su nombre y/o clave")
  }
  


}
