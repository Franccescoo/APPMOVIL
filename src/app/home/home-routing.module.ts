import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabInicioClienteComponent } from '../components/tab-inicio-cliente/tab-inicio-cliente.component';
import { TabMapaClienteComponent } from '../components/tab-mapa-cliente/tab-mapa-cliente.component';
import { TabPerfilClienteComponent } from '../components/tab-perfil-cliente/tab-perfil-cliente.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path:'inicio',
        component: TabInicioClienteComponent
      },
      {
        path:'mapa',
        component: TabMapaClienteComponent
      },
      {
        path: 'cuenta-cliente',
        component: TabPerfilClienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
