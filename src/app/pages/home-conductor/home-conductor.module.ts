import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeConductorPageRoutingModule } from './home-conductor-routing.module';

import { HomeConductorPage } from './home-conductor.page';
import { TabInicioConductorComponent } from 'src/app/components/tab-inicio-conductor/tab-inicio-conductor.component';
import { TabMapaConductorComponent } from 'src/app/components/tab-mapa-conductor/tab-mapa-conductor.component';
import { TabPerfilConductorComponent } from 'src/app/components/tab-perfil-conductor/tab-perfil-conductor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeConductorPageRoutingModule
  ],
  declarations: [HomeConductorPage,TabInicioConductorComponent,TabMapaConductorComponent,TabPerfilConductorComponent]
})
export class HomeConductorPageModule {}
