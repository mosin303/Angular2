import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SheradModule } from '../sherad/sherad.module';
import { LoginComponent } from './login/login.component';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';


@NgModule({
  declarations: [
    AdminComponent, 
    LoginComponent, AdminsuccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SheradModule
  ]
})
export class AdminModule { }
