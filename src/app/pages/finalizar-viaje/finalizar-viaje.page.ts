import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-finalizar-viaje',
  templateUrl: './finalizar-viaje.page.html',
  styleUrls: ['./finalizar-viaje.page.scss'],
})
export class FinalizarViajePage implements OnInit {

  constructor(private alertController: AlertController) {}
  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Viaje Finalizado!',
      subHeader: 'Viaje finalizado correctamente',
      message: '¡Cuidado al conducir!',
      buttons: ['Listo'],
    });

    await alert.present();
  }

}