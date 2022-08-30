import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagarclientePage } from './pagarcliente.page';

const routes: Routes = [
  {
    path: '',
    component: PagarclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagarclientePageRoutingModule {}
