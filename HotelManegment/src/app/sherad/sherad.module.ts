import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    ToastrModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
     NgFor,
     MatButtonModule,
      MatDividerModule, 
      MatIconModule,
      MatFormFieldModule,
      HttpClientModule,
      ToastrModule,



  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    NgFor,
    MatButtonModule,
      MatDividerModule, 
      MatIconModule,
      MatFormFieldModule,
      HttpClientModule,
      ToastrModule,
  ]
})
export class SheradModule { }
