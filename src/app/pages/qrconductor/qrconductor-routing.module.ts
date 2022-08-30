import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRConductorPage } from './qrconductor.page';

const routes: Routes = [
  {
    path: '',
    component: QRConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRConductorPageRoutingModule {}
