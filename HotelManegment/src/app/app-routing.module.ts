import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
 
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SigninComponent } from './user/signin/signin.component';
import { UsersuccessComponent } from './user/usersuccess/usersuccess.component';
import { BooknowComponent } from './user/booknow/booknow.component';

const routes: Routes = [
  { path: '',component:HomeComponent},
  { path:'home',component:HomeComponent},
  { path: 'user',component:UserComponent},
  { path: 'login',component:LoginComponent},
  { path: 'signin',component:SigninComponent},
  { path: 'userSuccess',component:UsersuccessComponent},
  { path: 'booknow',component:BooknowComponent},
  { path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path:'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
