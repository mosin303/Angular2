import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerhotelregistrationComponent } from './ownerhotelregistration/ownerhotelregistration.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { SheradModule } from '../sherad/sherad.module';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';


@NgModule({
  declarations: [
     
    OwnerhomeComponent,
    OwnerhotelregistrationComponent,
    OwnersignupComponent,
    OwnersuccessComponent,
    OwnersigninComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SheradModule,
  ]
})
export class OwnerModule { }
