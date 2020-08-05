import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';
import { ProgressPageModule } from '../progress/progress.module';
import { RouteSelectPageModule } from '../route-select/route-select.module';

var conditionalRoute: string;
var conditionalModule: any;
if (localStorage.getItem("roofrat_routeProgress")) {
  conditionalRoute = '../progress/progress.module';
  conditionalModule = ProgressPageModule;
} else {
  conditionalRoute = '../route-select/route-select.module';
  conditionalModule = RouteSelectPageModule;
}

const routes: Routes = [
  {
    path: '',
    component: TablinksPage,
    children: [
      {
        path: 'runlog',
        loadChildren: () => import('../runlog/runlog.module').then(m => m.RunlogPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'progress',
        children: [
          {
            path: '',
            loadChildren: () => import('../progress/progress.module').then(m => m.ProgressPageModule)
          },
          {
            path: 'landmark-list',
            children: [
              {
                path: '',
                loadChildren: () => import('../landmark-list/landmark-list.module').then(m => m.LandmarkListPageModule)
              },
              {
                path: 'landmark',
                loadChildren: () => import('../landmark/landmark.module').then(m => m.LandmarkPageModule)
              }
            ]

          }
        ]
      },
      {
        path: '',
        redirectTo: 'progress',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tablinks/progress',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
