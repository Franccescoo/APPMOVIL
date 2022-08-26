import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoClientePageRoutingModule } from './pago-cliente-routing.module';

import { PagoClientePage } from './pago-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoClientePageRoutingModule
  ],
  declarations: [PagoClientePage]
})
export class PagoClientePageModule {}
