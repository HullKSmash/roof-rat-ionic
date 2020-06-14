import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandmarkListPage } from './landmark-list.page';

const routes: Routes = [
  {
    path: '',
    component: LandmarkListPage
  },
  {
    path: 'landmark/:id',//add ID here
    loadChildren: () => import('../landmark/landmark.module').then(m => m.LandmarkPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandmarkListPageRoutingModule {}
