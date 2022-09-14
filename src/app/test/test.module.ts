import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestManagerComponent } from './test-manager/test-manager.component';
import { RouterModule, Routes } from '@angular/router';


export const testRoutes : Routes = [ 
  {
    path : '',
    component : TestManagerComponent
  }
] ;

@NgModule({
  declarations: [
    TestManagerComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild ( testRoutes )
  ]
})
export class TestModule { }
