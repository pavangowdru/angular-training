import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClocksManagerComponent } from './clocks-manager/clocks-manager.component';
import { RouterModule, Routes } from '@angular/router';


export const clocksRoutes : Routes = [ 
  {
    path : '',
    component : ClocksManagerComponent
  }
] ;
@NgModule({
  declarations: [
    ClocksManagerComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(clocksRoutes)
  ]
})
export class ClocksModule { }
