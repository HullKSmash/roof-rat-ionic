import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteSelectPage } from './route-select.page';

const routes: Routes = [
  {
    path: '',
    component: RouteSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteSelectPageRoutingModule {}
