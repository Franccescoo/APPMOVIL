import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarPassConductorPage } from './recuperar-pass-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarPassConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarPassConductorPageRoutingModule {}
