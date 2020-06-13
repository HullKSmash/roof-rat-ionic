import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/route-select/route-select.module').then(m => m.RouteSelectPageModule)
  },//conditional redirect here?
  {
    path: 'tablinks',
    loadChildren: './pages/tablinks/tablinks.module#TablinksPageModule'
  },
  {
    path: 'route-select',
    loadChildren: () => import('./pages/route-select/route-select.module').then( m => m.RouteSelectPageModule)
  }
/**  {
    path: 'landmark-list',
    loadChildren: () => import('./pages/landmark-list/landmark-list.module').then( m => m.LandmarkListPageModule)
  },
  {
    path: 'landmark',
    loadChildren: () => import('./pages/landmark/landmark.module').then( m => m.LandmarkPageModule)
  } */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
