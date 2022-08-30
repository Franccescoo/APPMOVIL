import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagarclientePageRoutingModule } from './pagarcliente-routing.module';

import { PagarclientePage } from './pagarcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagarclientePageRoutingModule
  ],
  declarations: [PagarclientePage]
})
export class PagarclientePageModule {}
