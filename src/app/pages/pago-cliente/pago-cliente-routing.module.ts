import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoClientePage } from './pago-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: PagoClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoClientePageRoutingModule {}
