import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MaterialModule } from '../material/material.module';
import { PrimengModule } from '../primeng/primeng.module';
import { FormErrorDirective } from '../directives/form-error.directive';
import {  ReactiveFormsModule } from '@angular/forms';
import { EmailComponent } from './pages/email/email.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FormErrorDirective,
    EmailComponent
  ],
  imports: [CommonModule, AuthRoutingModule, MaterialModule, PrimengModule, ReactiveFormsModule, 
   ],
})
export class AuthModule {}
