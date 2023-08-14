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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { FiltarPipe } from '../common/filtar.pipe';
import {MatSelectModule} from '@angular/material/select';
 



@NgModule({
  declarations: [
    FiltarPipe
  ],
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
      MatGridListModule,
      MatMenuModule,
      MatDialogModule,
      MatSelectModule,
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
      MatGridListModule,
      MatMenuModule,
      MatDialogModule,
      FiltarPipe,
      MatSelectModule,
  ]
})
export class SheradModule { }
