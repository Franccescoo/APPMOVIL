import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarPassConductorPageRoutingModule } from './recuperar-pass-conductor-routing.module';

import { RecuperarPassConductorPage } from './recuperar-pass-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarPassConductorPageRoutingModule
  ],
  declarations: [RecuperarPassConductorPage]
})
export class RecuperarPassConductorPageModule {}
