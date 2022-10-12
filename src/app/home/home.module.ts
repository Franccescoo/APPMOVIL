import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TabInicioClienteComponent } from '../components/tab-inicio-cliente/tab-inicio-cliente.component';
import { TabMapaClienteComponent } from '../components/tab-mapa-cliente/tab-mapa-cliente.component';
import { TabPerfilClienteComponent } from '../components/tab-perfil-cliente/tab-perfil-cliente.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TabInicioClienteComponent,TabMapaClienteComponent,TabPerfilClienteComponent]
})
export class HomePageModule {}
