import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesClientePageRoutingModule } from './ajustes-cliente-routing.module';

import { AjustesClientePage } from './ajustes-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesClientePageRoutingModule
  ],
  declarations: [AjustesClientePage]
})
export class AjustesClientePageModule {}
