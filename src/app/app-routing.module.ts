import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsManagerComponent } from './accounts/accounts-manager/accounts-manager.component';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterComponent } from './accounts/register/register.component';
import { CalendarsManagerComponent } from './calendars/calendars-manager/calendars-manager.component';
import { ClocksManagerComponent } from './clocks/clocks-manager/clocks-manager.component';
import { TestManagerComponent } from './test/test-manager/test-manager.component';


const routes: Routes = [
  {
    path: 'accounts',
    component: AccountsManagerComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: 'clocks',
    loadChildren: () =>
      import('./clocks/clocks.module').then((m) => m.ClocksModule),
  },
  {
    path: 'calendars',
    loadChildren: () =>
      import('./calendars/calendars.module').then((m) => m.CalendarsModule),
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then((m) => m.TestModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accounts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
