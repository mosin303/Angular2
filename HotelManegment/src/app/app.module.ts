import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
 
import { UserComponent } from './user/user.component';
import { SheradModule } from './sherad/sherad.module';
import { LoginComponent } from './user/login/login.component';
import { SigninComponent } from './user/signin/signin.component';
import { UsersuccessComponent } from './user/usersuccess/usersuccess.component';
import { ToastrModule } from 'ngx-toastr';
import { FiltarPipe } from './common/filtar.pipe';
import { BooknowComponent } from './user/booknow/booknow.component';
 
 
 
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    UserComponent,
    LoginComponent,
    SigninComponent,
    UsersuccessComponent,
    FiltarPipe,
    BooknowComponent,
     
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SheradModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
