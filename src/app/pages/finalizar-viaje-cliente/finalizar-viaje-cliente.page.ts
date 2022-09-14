import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-finalizar-viaje-cliente',
  templateUrl: './finalizar-viaje-cliente.page.html',
  styleUrls: ['./finalizar-viaje-cliente.page.scss'],
})
export class FinalizarViajeClientePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  ngOnInit() {
  }

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Viaje Finalizado!',
      subHeader: 'Viaje finalizado correctamente',
      message: '¡Cuidado al volver a casa!',
      buttons: ['Listo'],
    });

    await alert.present();
  }

  message = '';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

}
