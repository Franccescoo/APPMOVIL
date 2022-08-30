import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoQRPageRoutingModule } from './codigo-qr-routing.module';

import { CodigoQRPage } from './codigo-qr.page';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoQRPageRoutingModule,
    MatIconModule
  ],
  declarations: [CodigoQRPage]
})
export class CodigoQRPageModule {}
