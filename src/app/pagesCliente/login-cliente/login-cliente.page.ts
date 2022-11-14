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

  ListaDatos: any = [
    {
      idUsuario: '',
      nombre: '',
      username: '',
    }
  ]


  usuarios: any=[{
    id: '',
    nombre:'',
    clave:'',
    id_rol:''
  }];

  constructor(private menuController: MenuController,private nativeStorage: NativeStorage,private alertController: AlertController, private router: Router, private api: Apiservices2Service, private bd: DbservicioService,public storage: Storage,private toastController: ToastController) {
    menuController.enable(false , "first")


  }
  ngOnInit() {
    this.api.getUsuarios().subscribe((res)=>{
      this.usuarios = res;
      //console.log(res)
      for(let x of this.usuarios){
        this.presentToast(x.nombre);
        this.bd.agregarUsuario(x.id, x.nombre,x.clave, x.id_rol);
      }
     
    });
  }

  
  async iniciarSesion(){
    await this.bd.login(this.ingreso.nombre, this.ingreso.clave);
    if (this.ingreso.nombre.length == 0) {
        this.presentToast("Ingrese usuario");
    }
    else if(this.ingreso.clave == 0){
      this.presentToast("Ingrese Su Contraseña");
    }
    else if(this.usuarios.length == 0){
      this.presentToast("Usuario y/o Contraseña incorrecta");
    }else{
      this.storage.set('nombre_usuario', this.usuarios[0].nombre)
      this.nativeStorage.setItem('id',this.usuarios[0].id)
      this.nativeStorage.setItem('nombre',this.usuarios[0].nombre)
      this.nativeStorage.setItem('clave',this.usuarios[0].clave)
      this.nativeStorage.setItem('idrol',this.usuarios[0].idrol)
      this.router.navigate(['/modificar-cliente']);

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
