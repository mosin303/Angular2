import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent {
  bookNow!:FormGroup;
 
 constructor(private fB:FormBuilder,
  private router:Router,
  private apiCallService:CommonApiCallService,
  private toaster:ToastrService,
   ){}


 ngOnInit(){
   
 this.formDetl()
 }
 formDetl(){
  this.bookNow = this.fB.group({
    userName:['',[Validators.required]],
    adharno:['',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
     mobNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    amount:['',[Validators.required]],
  })
 }

async submit(){
  
   let endPoint = 'hotelBooking';
  
  let request = {
    UserName : this.bookNow.value.userName,
    AdharNo : this.bookNow.value.adharno,
    Mobile : this.bookNow.value.mobNo,
    Amount : this.bookNow.value.amount,
  }
   await this.apiCallService.postApicall(endPoint,request).toPromise() 
     console.log(this.bookNow.value);
     
    
  
  this.toaster.success(`Booking `,`Successful`)
  

  this.toaster.success(`wel-come ${this.bookNow.value.userName}`,`Successfully login `)

  this.router.navigateByUrl('userSuccess');
    
    
 }


  
}
