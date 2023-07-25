import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SheradModule } from '../sherad/sherad.module';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AdminComponent,
    RegistrationComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SheradModule
  ]
})
export class AdminModule { }
