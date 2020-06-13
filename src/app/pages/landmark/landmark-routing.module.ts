import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandmarkPage } from './landmark.page';

const routes: Routes = [
  {
    path: '',
    component: LandmarkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandmarkPageRoutingModule {}
