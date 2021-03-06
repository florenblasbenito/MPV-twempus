import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module';


import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
