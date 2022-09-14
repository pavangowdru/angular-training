import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarsManagerComponent } from './calendars-manager/calendars-manager.component';
import { RouterModule, Routes } from '@angular/router';

export const calendarsRoutes: Routes = [
  {
    path: '',
    component: CalendarsManagerComponent,
  },
];

@NgModule({
  declarations: [CalendarsManagerComponent],
  imports: [CommonModule, RouterModule.forChild(calendarsRoutes)],
})
export class CalendarsModule {}
