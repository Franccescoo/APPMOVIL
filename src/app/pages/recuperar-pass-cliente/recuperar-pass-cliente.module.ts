import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarPassClientePageRoutingModule } from './recuperar-pass-cliente-routing.module';

import { RecuperarPassClientePage } from './recuperar-pass-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarPassClientePageRoutingModule
  ],
  declarations: [RecuperarPassClientePage]
})
export class RecuperarPassClientePageModule {}
