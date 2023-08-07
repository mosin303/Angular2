import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-newhotel',
  templateUrl: './newhotel.component.html',
  styleUrls: ['./newhotel.component.scss']
})
export class NewhotelComponent {
  hotelForm!: FormGroup;
   editId!:number;
  postResponse:any;
  journey!: string;
   
  dataById: any;
   
  constructor(private fb: FormBuilder,
    private router:Router,
    private toaster : ToastrService, 
    private apiCallService:CommonApiCallService,
    private commonService:CommonService,
    ) {

     
  }

  ngOnInit() {
    this. editId = this.commonService.id;
      this. dataById = this.commonService.dataById;
         
    this.formdata()
    
  }
  formdata(){
  this.hotelForm = this.fb.group({
    ownerName: [this.dataById ? this.dataById.OwnerName :'', Validators.required],
    ownerMobNo: [this.dataById ? this.dataById.OwnerMobNo :'', Validators.required],
    hotelName: [this.dataById ? this.dataById.HotelName :'', Validators.required],
    hotelAddress: [this.dataById ? this.dataById.HotelAddress :'', Validators.required],
    hotelMobile: [this.dataById ? this.dataById.HotelMobile :'', Validators.required],
    hotelMenu: [this.dataById ? this.dataById.HotelMenu :'', Validators.required],
    roomAvailable: [this.dataById ? this.dataById.RoomAvailable :'', Validators.required ],
    image: [this.dataById ? this.dataById.Image :""],
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
       
     if(this. editId){
    this.apiCallService.putApiCall(endpoint,request, this. editId).subscribe((res: any)=>{
      console.log(res);
    })
    this.toaster.success('Hotel Update data Successfull', "Congratulations!!")
    
     }
      else{
this.apiCallService.postApiCall(endpoint,request).subscribe((resp:any)=>{
  console.log(resp);
  
})
 
}
this.toaster.success('Hotel Registration Successfull', "Congratulations!!")
this.router.navigateByUrl('owner/ownerSuccess');     
}

     ngOnDestroy(){ 
      this.commonService.dataById = {};
      this.commonService.id = '' ;
     }
} 
 

 
// submit(){
//   console.log(this.signUpForm.value);
//   let endPoint = 'posts';
//   if(this.journey != 'update'){
//   this.ApidataSevice.postApiCall(endPoint,this.signUpForm.value).subscribe(response =>{
//   this.postApiResponse = response;
//   })
// }
// else{
//   this.ApidataSevice.putApiCall(endPoint,this.signUpForm.value,'1').subscribe(res=>{
//     console.log(res);
    
//   })
//  }
// }



 