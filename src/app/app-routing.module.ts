import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login-cliente',
    pathMatch: 'full'
  },
  {
    path: 'login-cliente',
    loadChildren: () => import('./pagesCliente/login-cliente/login-cliente.module').then( m => m.LoginClientePageModule)
  },
  {
    path: 'login-conductor',
    loadChildren: () => import('./pagesConductor/login-conductor/login-conductor.module').then( m => m.LoginConductorPageModule)
  },
  {
    path: 'crear-cuenta-cliente',
    loadChildren: () => import('./pagesCliente/crear-cuenta-cliente/crear-cuenta-cliente.module').then( m => m.CrearCuentaClientePageModule)
  },
  {
    path: 'crear-cuenta-conductor',
    loadChildren: () => import('./pagesConductor/crear-cuenta-conductor/crear-cuenta-conductor.module').then( m => m.CrearCuentaConductorPageModule)
  },
  {
    path: 'recuperar-pass-cliente',
    loadChildren: () => import('./pagesCliente/recuperar-pass-cliente/recuperar-pass-cliente.module').then( m => m.RecuperarPassClientePageModule)
  },
  {
    path: 'mapa-cliente',
    loadChildren: () => import('./pagesCliente/mapa-cliente/mapa-cliente.module').then( m => m.MapaClientePageModule)
  },
  {
    path: 'mapa-conductor',
    loadChildren: () => import('./pagesConductor/mapa-conductor/mapa-conductor.module').then( m => m.MapaConductorPageModule)
  },
  {
    path: 'modificar-cliente',
    loadChildren: () => import('./pagesCliente/modificar-cliente/modificar-cliente.module').then( m => m.ModificarClientePageModule)
  },
  {
    path: 'modificar-conductor',
    loadChildren: () => import('./pagesConductor/modificar-conductor/modificar-conductor.module').then( m => m.ModificarConductorPageModule)
  },
  {
    path: 'viajes-disponible',
    loadChildren: () => import('./pagesCliente/viajes-disponible/viajes-disponible.module').then( m => m.ViajesDisponiblePageModule)
  },
  {
    path: 'solicitud-viaje',
    loadChildren: () => import('./pagesConductor/solicitud-viaje/solicitud-viaje.module').then( m => m.SolicitudViajePageModule)
  },
  {
    path: 'finalizar-viaje',
    loadChildren: () => import('./pages/finalizar-viaje/finalizar-viaje.module').then( m => m.FinalizarViajePageModule)

  },
  {
    path: 'finalizar-viaje-cliente',
    loadChildren: () => import('./pagesCliente/finalizar-viaje-cliente/finalizar-viaje-cliente.module').then( m => m.FinalizarViajeClientePageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'comentario-conductor',
    loadChildren: () => import('./pagesConductor/comentario-conductor/comentario-conductor.module').then( m => m.ComentarioConductorPageModule)
  },
  {
    path: 'paginainicio',
    loadChildren: () => import('./pagesCliente/paginainicio/paginainicio.module').then( m => m.PaginainicioPageModule)
  },
  {
    path: 'paginainicio',
    loadChildren: () => import('./pagesConductor/paginainicio/paginainicio.module').then( m => m.PaginainicioPageModule)
  },
  {
    path: 'inicio-cliente',
    loadChildren: () => import('./pagesCliente/inicio-cliente/inicio-cliente.module').then( m => m.InicioClientePageModule)
  },
  {
    path: 'inicio-conductor',
    loadChildren: () => import('./pagesConductor/inicio-conductor/inicio-conductor.module').then( m => m.InicioConductorPageModule)
  },
  {
    path: 'inicio-conductor',
    loadChildren: () => import('./pagesConductor/inicio-conductor/inicio-conductor.module').then( m => m.InicioConductorPageModule)
  },
  {
    path: 'perfil-cliente',
    loadChildren: () => import('./pagesCliente/perfil-cliente/perfil-cliente.module').then( m => m.PerfilClientePageModule)
  },
  {
    path: 'perfil-conductor',
    loadChildren: () => import('./pagesConductor/perfil-conductor/perfil-conductor.module').then( m => m.PerfilConductorPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
