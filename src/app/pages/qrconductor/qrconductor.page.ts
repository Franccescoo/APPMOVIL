import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qrconductor',
  templateUrl: './qrconductor.page.html',
  styleUrls: ['./qrconductor.page.scss'],
})
export class QRConductorPage implements OnInit {

  constructor(private alertController: AlertController) {}
  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Código QR',
      subHeader: 'Escaneado Correctamente',
      message: '¡El viaje ha empezado!',
      buttons: ['Buen viaje'],
    });

    await alert.present();
  }

}
