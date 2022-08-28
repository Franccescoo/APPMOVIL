import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login-conductor',
    pathMatch: 'full'
  },
  {
    path: 'login-cliente',
    loadChildren: () => import('./pages/login-cliente/login-cliente.module').then( m => m.LoginClientePageModule)
  },
  {
    path: 'login-conductor',
    loadChildren: () => import('./pages/login-conductor/login-conductor.module').then( m => m.LoginConductorPageModule)
  },
  {
    path: 'crear-cuenta-cliente',
    loadChildren: () => import('./pages/crear-cuenta-cliente/crear-cuenta-cliente.module').then( m => m.CrearCuentaClientePageModule)
  },
  {
    path: 'crear-cuenta-conductor',
    loadChildren: () => import('./pages/crear-cuenta-conductor/crear-cuenta-conductor.module').then( m => m.CrearCuentaConductorPageModule)
  },
  {
    path: 'recuperar-pass-cliente',
    loadChildren: () => import('./pages/recuperar-pass-cliente/recuperar-pass-cliente.module').then( m => m.RecuperarPassClientePageModule)
  },
  {
    path: 'inicio-cliente',
    loadChildren: () => import('./pages/inicio-cliente/inicio-cliente.module').then( m => m.InicioClientePageModule)
  },
  {
    path: 'inicio-conductor',
    loadChildren: () => import('./pages/inicio-conductor/inicio-conductor.module').then( m => m.InicioConductorPageModule)
  },
  {
    path: 'mapa-cliente',
    loadChildren: () => import('./pages/mapa-cliente/mapa-cliente.module').then( m => m.MapaClientePageModule)
  },
  {
    path: 'mapa-conductor',
    loadChildren: () => import('./pages/mapa-conductor/mapa-conductor.module').then( m => m.MapaConductorPageModule)
  },
  {
    path: 'perfil-cliente',
    loadChildren: () => import('./pages/perfil-cliente/perfil-cliente.module').then( m => m.PerfilClientePageModule)
  },
  {
    path: 'perfil-conductor',
    loadChildren: () => import('./pages/perfil-conductor/perfil-conductor.module').then( m => m.PerfilConductorPageModule)
  },
  {
    path: 'ajustes-cliente',
    loadChildren: () => import('./pages/ajustes-cliente/ajustes-cliente.module').then( m => m.AjustesClientePageModule)
  },
  {
    path: 'ajustes-conductor',
    loadChildren: () => import('./pages/ajustes-conductor/ajustes-conductor.module').then( m => m.AjustesConductorPageModule)
  },
  {
    path: 'pedir-viaje-cliente',
    loadChildren: () => import('./pages/pedir-viaje-cliente/pedir-viaje-cliente.module').then( m => m.PedirViajeClientePageModule)
  },
  {
    path: 'modificar-cliente',
    loadChildren: () => import('./pages/modificar-cliente/modificar-cliente.module').then( m => m.ModificarClientePageModule)
  },
  {
    path: 'modificar-conductor',
    loadChildren: () => import('./pages/modificar-conductor/modificar-conductor.module').then( m => m.ModificarConductorPageModule)
  },
  {
    path: 'pago-cliente',
    loadChildren: () => import('./pages/pago-cliente/pago-cliente.module').then( m => m.PagoClientePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
