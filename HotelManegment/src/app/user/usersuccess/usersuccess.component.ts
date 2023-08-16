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
imageUrls=[""];
   

  
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

  

 
 
