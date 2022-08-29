import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudaClientePageRoutingModule } from './ayuda-cliente-routing.module';

import { AyudaClientePage } from './ayuda-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudaClientePageRoutingModule
  ],
  declarations: [AyudaClientePage]
})
export class AyudaClientePageModule {}
