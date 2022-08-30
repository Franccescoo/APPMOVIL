import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizarViajeClientePage } from './finalizar-viaje-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarViajeClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizarViajeClientePageRoutingModule {}
