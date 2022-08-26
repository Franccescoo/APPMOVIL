import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesConductorPageRoutingModule } from './ajustes-conductor-routing.module';

import { AjustesConductorPage } from './ajustes-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesConductorPageRoutingModule
  ],
  declarations: [AjustesConductorPage]
})
export class AjustesConductorPageModule {}
