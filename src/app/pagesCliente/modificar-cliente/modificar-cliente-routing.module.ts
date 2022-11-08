import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarClientePage } from './modificar-cliente.page';
import {MatIconModule} from '@angular/material/icon'

const routes: Routes = [
  {
    path: '',
    component: ModificarClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,MatIconModule],
})
export class ModificarClientePageRoutingModule {}
