import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedirViajeClientePageRoutingModule } from './pedir-viaje-cliente-routing.module';

import { PedirViajeClientePage } from './pedir-viaje-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedirViajeClientePageRoutingModule
  ],
  declarations: [PedirViajeClientePage]
})
export class PedirViajeClientePageModule {}
