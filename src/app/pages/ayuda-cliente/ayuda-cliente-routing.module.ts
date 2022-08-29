import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudaClientePage } from './ayuda-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: AyudaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudaClientePageRoutingModule {}
