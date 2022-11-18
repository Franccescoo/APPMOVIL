import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';
import { IonicModule } from '@ionic/angular';

import { ModificarClientePageRoutingModule } from './modificar-cliente-routing.module';

import { ModificarClientePage } from './modificar-cliente.page';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarClientePageRoutingModule,
    Geolocation,
    NativeStorage,
    IonicStorageModule.forRoot()
  ],
  declarations: [ModificarClientePage]
})
export class ModificarClientePageModule {}
