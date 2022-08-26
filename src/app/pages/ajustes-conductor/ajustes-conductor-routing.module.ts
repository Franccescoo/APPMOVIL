import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustesConductorPage } from './ajustes-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: AjustesConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustesConductorPageRoutingModule {}
