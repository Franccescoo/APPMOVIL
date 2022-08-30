import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FototelefonoPage } from './fototelefono.page';

const routes: Routes = [
  {
    path: '',
    component: FototelefonoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FototelefonoPageRoutingModule {}
