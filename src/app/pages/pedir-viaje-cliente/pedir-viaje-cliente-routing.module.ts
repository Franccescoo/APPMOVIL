import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedirViajeClientePage } from './pedir-viaje-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: PedirViajeClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedirViajeClientePageRoutingModule {}
