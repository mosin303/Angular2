import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';

@Component({
  selector: 'app-newhotel',
  templateUrl: './newhotel.component.html',
  styleUrls: ['./newhotel.component.scss']
})
export class NewhotelComponent {
  hotelForm!: FormGroup;
  endpoint!:string;
  postResponse:any;
  journey!: string;

  constructor(private fb: FormBuilder,
    private router:Router,
    private toaster : ToastrService, 
    private apiCallService:CommonApiCallService,
    ) {

     
  }

  ngOnInit() {
    this.endpoint = 'hotel';
    if(this.journey!= 'update')
    console.log(this.endpoint);     
    this.formdata()
    
  }
  formdata(){
  this.hotelForm = this.fb.group({
    ownerName: ['', Validators.required],
    ownerMobNo: ['', Validators.required],
    hotelName: ['', Validators.required],
    hotelAddress: ['', Validators.required],
    hotelMobile: ['', Validators.required],
    hotelMenu: ['', Validators.required],
    roomAvailable: ['', Validators.required ],
    image: [""],
  });
}

onSubmit() {
let endpoint='hotel';
console.log('form data',this.hotelForm.value);

let request = {
  
          OwnerName : this.hotelForm.value.ownerName,
         OwnerMobNo : this.hotelForm.value.ownerMobNo,
         HotelName : this.hotelForm.value.hotelName,
          HotelAddress:this.hotelForm.value.hotelAddress,
          HotelMobile : this.hotelForm.value.hotelMobile,
          HotelMenu : this.hotelForm.value.hotelMenu,
          RoomAvailable : this.hotelForm.value.roomAvailable,
          Image: this.hotelForm.value.image,
       }

this.apiCallService.postApiCall(endpoint,request).subscribe((resp:any)=>{
  console.log(resp);
  
})
     this.toaster.success('Hotel Registration Successfull', "Congratulations!!")
    
       this.router.navigateByUrl('owner/hoteldetails');


}

 
 
}

 




 