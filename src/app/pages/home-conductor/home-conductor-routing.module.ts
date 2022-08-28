import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabInicioConductorComponent } from 'src/app/components/tab-inicio-conductor/tab-inicio-conductor.component';
import { TabMapaConductorComponent } from 'src/app/components/tab-mapa-conductor/tab-mapa-conductor.component';
import { TabPerfilConductorComponent } from 'src/app/components/tab-perfil-conductor/tab-perfil-conductor.component';

import { HomeConductorPage } from './home-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: HomeConductorPage,
    children: [
      {
        path:'inicio',
        component: TabInicioConductorComponent
      },
      {
        path:'mapa',
        component: TabMapaConductorComponent
      },
      {
        path: 'cuenta',
        component: TabPerfilConductorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeConductorPageRoutingModule {}
