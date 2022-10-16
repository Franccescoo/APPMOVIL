import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-finalizar-viaje-cliente',
  templateUrl: './finalizar-viaje-cliente.page.html',
  styleUrls: ['./finalizar-viaje-cliente.page.scss'],
})
export class FinalizarViajeClientePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  message = '';
  name: string;
  texto: "";

  constructor(private router: Router,private bd: DbservicioService,private alertController: AlertController) {}
  ngOnInit() {
  }

  guardar(){
    this.bd.agregarComen(this.texto);
    this.bd.presentAlert1("Noticia Agregada", "Tabla Noticia");
    this.router.navigate(['/home']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Viaje Finalizado!',
      subHeader: 'Viaje finalizado correctamente',
      message: '¡Cuidado al volver a casa!',
      buttons: ['Listo'],
    });

    await alert.present();
  }

  async presentAlert12() {
    const alert = await this.alertController.create({
      header: 'Comentario Enviado!',
      buttons: ['Listo'],
    });

    await alert.present();
  }


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
