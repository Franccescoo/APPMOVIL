import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Apiservices2Service } from 'src/app/services/apiservices2.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
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
  usuarios: any = [{
    id: '',
    nombre: '',
    clave: '',
    id_rol: ''
  }];

  Usuario: any[] = []

  constructor(private menuController: MenuController, private nativeStorage: NativeStorage, private alertController: AlertController, private router: Router, private api: Apiservices2Service, private bd: DbservicioService, public storage: Storage, private toastController: ToastController) {
    menuController.enable(false, "first")

  }
  ngOnInit() {
    this.bd.presentAlert("1");
    this.api.getUsuarios().subscribe((res) => {
      this.bd.presentAlert("2");
      this.Usuario = res;
      console.log(res)
      for (let x of this.Usuario) {
        this.bd.presentAlert(x.nombre);
        this.bd.agregarUsuario(x.id, x.nombre, x.clave, x.id_rol);
      }
    });
  }


  async iniciarSesion() {
    await this.bd.login(this.ingreso.nombre, this.ingreso.clave);
    if (this.ingreso.nombre.length == 0) {
      this.presentToast("Por favor Ingrese su nombre de Usuario");
    }
    else if (this.ingreso.clave.length == 0) {
      this.presentToast("Ingrese Su Contraseña");
    }
    else if (this.Usuario.length == 0) {
      this.presentToast("Usuario y/o Contraseña incorrecta");
    }
    else {
      if (this.Usuario[0].id_rol == 2) {
        this.router.navigate(['/modificar-cliente']);
        this.nativeStorage.setItem('id', this.Usuario[0].idusuario)
        this.nativeStorage.setItem('nombre', this.Usuario[0].nombre)
        this.nativeStorage.setItem('idrol', this.Usuario[0].id_rol)
        this.presentToast("Bienvenido " + this.ingreso.nombre);

      } else {
        if (this.Usuario[0].id_rol == 1) {
          this.router.navigate(['/modificar-cliente']);
          this.nativeStorage.setItem('id', this.Usuario[0].id_usuario)
          this.nativeStorage.setItem('nombre', this.Usuario[0].username)
          this.nativeStorage.setItem('idrol', this.Usuario[0].id_rol)
          this.presentToast("Bienvenido " + this.ingreso.nombre);
        }
      }
    }
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000

    });
    toast.present();
  }

  // editar(x){
  //   let navigationsExtras: NavigationExtras ={
  //     state:{
  //       idEnviado2: x.id2,
  //       nombreenviado: x.nombre,
  //       usernameneviado: x.username
  //     }
  //   }
  //   this.router.navigate(['/modificar-cliente'],navigationsExtras);
  // }

}
