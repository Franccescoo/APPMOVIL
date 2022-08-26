import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustesClientePage } from './ajustes-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: AjustesClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustesClientePageRoutingModule {}
