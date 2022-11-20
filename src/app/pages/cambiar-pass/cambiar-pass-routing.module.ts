import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

import { CambiarPassPage } from './cambiar-pass.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarPassPageRoutingModule {}
