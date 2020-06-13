import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouteSelectPageRoutingModule } from './route-select-routing.module';

import { RouteSelectPage } from './route-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouteSelectPageRoutingModule
  ],
  declarations: [RouteSelectPage]
})
export class RouteSelectPageModule {}
