import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FototelefonoPageRoutingModule } from './fototelefono-routing.module';

import { FototelefonoPage } from './fototelefono.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FototelefonoPageRoutingModule
  ],
  declarations: [FototelefonoPage]
})
export class FototelefonoPageModule {}
