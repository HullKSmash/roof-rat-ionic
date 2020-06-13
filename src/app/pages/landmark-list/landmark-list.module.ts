import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandmarkListPageRoutingModule } from './landmark-list-routing.module';

import { LandmarkListPage } from './landmark-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandmarkListPageRoutingModule
  ],
  declarations: [LandmarkListPage]
})
export class LandmarkListPageModule {}
