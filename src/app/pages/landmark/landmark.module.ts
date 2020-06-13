import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandmarkPageRoutingModule } from './landmark-routing.module';

import { LandmarkPage } from './landmark.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandmarkPageRoutingModule
  ],
  declarations: [LandmarkPage]
})
export class LandmarkPageModule {}
