import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viajes-disponible',
  templateUrl: './viajes-disponible.page.html',
  styleUrls: ['./viajes-disponible.page.scss'],
})
export class ViajesDisponiblePage implements OnInit {

  constructor(private alertController: AlertController) {}
  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
