import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsManagerComponent } from './accounts-manager/accounts-manager.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccountsManagerComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, RouterModule],
})
export class AccountsModule {}
