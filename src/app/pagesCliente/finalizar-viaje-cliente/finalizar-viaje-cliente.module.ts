import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarViajeClientePageRoutingModule } from './finalizar-viaje-cliente-routing.module';

import { FinalizarViajeClientePage } from './finalizar-viaje-cliente.page';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizarViajeClientePageRoutingModule,
    MatIconModule
  ],
  declarations: [FinalizarViajeClientePage]
})
export class FinalizarViajeClientePageModule {}
