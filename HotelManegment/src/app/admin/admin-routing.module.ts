import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SignupComponent } from './signup/signup.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
{ path: 'signup', component: SignupComponent  },
{ path: 'registration', component: RegistrationComponent },
{ path: 'login', component:  LoginComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
