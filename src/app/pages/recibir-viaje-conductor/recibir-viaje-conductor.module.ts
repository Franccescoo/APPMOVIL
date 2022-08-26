import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibirViajeConductorPageRoutingModule } from './recibir-viaje-conductor-routing.module';

import { RecibirViajeConductorPage } from './recibir-viaje-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibirViajeConductorPageRoutingModule
  ],
  declarations: [RecibirViajeConductorPage]
})
export class RecibirViajeConductorPageModule {}
