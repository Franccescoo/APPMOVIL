import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecibirViajeConductorPage } from './recibir-viaje-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: RecibirViajeConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecibirViajeConductorPageRoutingModule {}
