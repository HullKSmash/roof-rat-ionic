import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunlogPageRoutingModule } from './runlog-routing.module';

import { RunlogPage } from './runlog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RunlogPageRoutingModule
  ],
  declarations: [RunlogPage]
})
export class RunlogPageModule {}
