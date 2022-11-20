import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginClientePageRoutingModule } from './login-cliente-routing.module';

import { LoginClientePage } from './login-cliente.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginClientePageRoutingModule,
    SQLite
  ],
  declarations: [LoginClientePage]
})
export class LoginClientePageModule {}
