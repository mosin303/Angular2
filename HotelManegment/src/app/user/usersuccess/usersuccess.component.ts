import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { BooknowComponent } from '../booknow/booknow.component';

@Component({
  selector: 'app-usersuccess',
  templateUrl: './usersuccess.component.html',
  styleUrls: ['./usersuccess.component.scss']
})
export class UsersuccessComponent {
  hotelForm!: any;
  data:any;
  bookNow!:FormGroup;
  showbookNow:boolean = false;
searchBoxVal: any;
 
   

  
  constructor(private fB:FormBuilder,
    private router:Router,
    private apiCallService:CommonApiCallService,
    private toaster:ToastrService ,public dialog: MatDialog){}

     
    ngOnInit(): void {
      console.log('....')
      
     let urlEndPointToGetData ='hotel';
      this.apiCallService.getData(urlEndPointToGetData).subscribe((response) => {
        this.hotelForm = response;
      });
       
     
    }

logout(){
  this.router.navigateByUrl('home')
}
booknow(){
  const dialogRef = this.dialog.open(BooknowComponent, {
    // data: {id:id},
     width: '350px',
     height:'550px'
   })
   dialogRef.afterClosed().subscribe((yesValue:any)=>{
    if(yesValue === 'YES'){
      
    } 
  });
   
  }

}
 
 
