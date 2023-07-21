import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { UserComponent } from './user/user.component';
import { SheradModule } from './sherad/sherad.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwnerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SheradModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
