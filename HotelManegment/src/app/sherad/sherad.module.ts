import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    

  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ]
})
export class SheradModule { }
