import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage implements OnInit {
  usuario: any;

  user: string = "";
  clave: string ="";

  validarpass(){
    if (this.user == "victor@gmail.com" && this.clave == "12345") {
      this.route.navigate(['/home']);
    }
    else {
      this.presentAlert();
    }
  }

  constructor(private alertController: AlertController,private route:Router,private api: ApiService) {}
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
subsUser(id){
  this.api.getUser(id).subscribe((res)=>{
    if (res){
      this.usuario = res;
      
    }
  })
}
}
