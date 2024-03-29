import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { RouteSelectGuardService } from './services/route-select-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tablinks',
    pathMatch: 'full'
  },
  {
    path: 'tablinks',
    loadChildren: () => import('./pages/tablinks/tablinks.module').then(m => m.TablinksPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'route-select',
    loadChildren: () => import('./pages/route-select/route-select.module').then( m => m.RouteSelectPageModule),
    canActivate: [RouteSelectGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
