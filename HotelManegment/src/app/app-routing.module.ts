import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  { path: '',component:HomeComponent},
  { path:'home',component:HomeComponent},
  { path: 'owner',component:OwnerComponent},
  { path: 'user',component:UserComponent},
  { path: 'login',component:LoginComponent},
  { path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
