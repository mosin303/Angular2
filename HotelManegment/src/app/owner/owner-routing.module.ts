import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerhotelregistrationComponent } from './ownerhotelregistration/ownerhotelregistration.component';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';
import { NewhotelComponent } from './newhotel/newhotel.component';

const routes: Routes = [
  {path:'',component:OwnerhomeComponent},
  {path:'ownerHome',component:OwnerhomeComponent},
  {path:'ownerSignUp',component:OwnersignupComponent},
  {path:'ownerSignIn',component:OwnersigninComponent},
  {path:'ownerSuccess',component:OwnersuccessComponent},
  {path:'ownrhotelristation',component:OwnerhotelregistrationComponent},
 { path:'hoteldetails',component:HoteldetailsComponent},
 { path:'newhotel',component: NewhotelComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
