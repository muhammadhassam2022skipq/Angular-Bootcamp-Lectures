import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { SigninComponent } from './signin/signin.component';
import { SigninFormComponent } from './signin/signin-form/signin-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordFormComponent } from './forgot-password/forgot-password-form/forgot-password-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordFormComponent } from './reset-password/reset-password-form/reset-password-form.component';


@NgModule({
  declarations: [
    SignupComponent,
    SignupFormComponent,
    SigninComponent,
    SigninFormComponent,
    ForgotPasswordComponent,
    ForgotPasswordFormComponent,
    ResetPasswordComponent,
    ResetPasswordFormComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
