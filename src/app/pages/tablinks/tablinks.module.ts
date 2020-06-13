import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPageRoutingModule } from './tablinks-routing.module';
import { TablinksPage } from './tablinks.page';
import { LandmarkListPageModule } from '../landmark-list/landmark-list.module';
import { LandmarkListPage } from '../landmark-list/landmark-list.page';
import { ProgressPageModule } from '../progress/progress.module';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'progress',
//        component: ProgressPageModule,
        loadChildren: '../progress/progress.module#ProgressPageModule',
        children: [
          {
            path: 'landmark-list',
//            component: LandmarkListPage
            loadChildren: '../landmark-list/landmark-list.module#LandmarkListPageModule'
          }
        ]
      },
      {
        path: 'runlog',
        loadChildren: '../runlog/runlog.module#RunlogPageModule'
      },
      {
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tablinks/progress'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablinksPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablinksPage]
})
export class TablinksPageModule {}
