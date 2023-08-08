import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-doialog',
  templateUrl: './doialog.component.html',
  styleUrls: ['./doialog.component.scss']
})
export class DoialogComponent {


  constructor(public dialogRef: MatDialogRef<DoialogComponent>){}

  onNoClick(): void {
    this.dialogRef.close();
  
   }
   onYesClick(){
    this.dialogRef.close('YES');
   }
}
