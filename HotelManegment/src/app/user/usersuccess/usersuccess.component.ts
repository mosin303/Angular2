import { Component } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
 
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
 

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
    private toastr:ToastrService , ){}

     
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
   
  this.router.navigateByUrl('booknow')
  
  }
}

  // ---------------------------booking---------------

 
//  formDetl(){
//   this.bookNow = this.fB.group({
//     userName:['',[Validators.required]],
//     adharno:['',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
//      mobNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
//     amount:['',[Validators.required]],
//   })
//  }

// async submit(){
  
//    let endPoint = 'hotelBooking';
  
//   let request = {
//     UserName : this.bookNow.value.userName,
//     AdharNo : this.bookNow.value.adharno,
//     Mobile : this.bookNow.value.mobNo,
//     Amount : this.bookNow.value.amount,
//   }
//    await this.apiCallService.postApicall(endPoint,request).toPromise() 
//      console.log(this.bookNow.value);
     
    
  
//   this.toaster.success(`Booking `,`Successful`)

//    this.router.navigateByUrl('userSuccess');
    
    
//  }
//  booknow(){
//   this.showbookNow = !this.showbookNow;
//   this.formDetl();
// }




// }
 
 
