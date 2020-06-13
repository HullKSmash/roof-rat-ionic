import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunlogPage } from './runlog.page';

const routes: Routes = [
  {
    path: '',
    component: RunlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunlogPageRoutingModule {}
