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
  getDataById: any;

  constructor(private fb: FormBuilder,
    private router:Router,
    private toaster : ToastrService, 
    private apiCallService:CommonApiCallService,
    ) {

     
  }

  ngOnInit() {
    this.getDataById = this.apiCallService.getDataById;
      this.journey = this.apiCallService.journey;
      console.log( this.getDataById );
    this.endpoint = 'hotel';
    if(this.journey!= 'update')
    console.log(this.endpoint);     
    this.formdata()
    
  }
  formdata(){
  this.hotelForm = this.fb.group({
    ownerName: [this.getDataById?.OwnerName ? this.getDataById.OwnerName :'', Validators.required],
    ownerMobNo: [this.getDataById?.OwnerMobNo ? this.getDataById.OwnerMobNo :'', Validators.required],
    hotelName: [this.getDataById?.HotelName ? this.getDataById.HotelName :'', Validators.required],
    hotelAddress: [this.getDataById?.HotelAddress ? this.getDataById.HotelAddress :'', Validators.required],
    hotelMobile: [this.getDataById?.HotelMobile ? this.getDataById.HotelMobile :'', Validators.required],
    hotelMenu: [this.getDataById?.HotelMenu ? this.getDataById.HotelMenu :'', Validators.required],
    roomAvailable: [this.getDataById?.RoomAvailable ? this.getDataById.RoomAvailable :'', Validators.required ],
    image: [this.getDataById?.Image ? this.getDataById.Image :""],
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
    
       this.router.navigateByUrl('owner/ownerSuccess');
} 


}

 




 