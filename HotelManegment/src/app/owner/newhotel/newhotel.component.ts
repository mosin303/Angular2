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
  selectedImage: File | null = null;
  dataById: any;
  hotelImages: any;
   
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
    ownerMobNo: [this.dataById ? this.dataById.OwnerMobNo :'', Validators.required ],
    hotelName: [this.dataById ? this.dataById.HotelName :'', Validators.required],
    hotelAddress: [this.dataById ? this.dataById.HotelAddress :'', Validators.required],
    hotelMobile: [this.dataById ? this.dataById.HotelMobile :'', Validators.required ],
    hotelMenu: [this.dataById ? this.dataById.HotelMenu :'', Validators.required],
    roomAvailable: [this.dataById ? this.dataById.RoomAvailable :'', Validators.required ],
    image: [this.dataById ? this.dataById.Image :''],
    // "/assets/newimg/hotel-10.jpg"
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
          Image: this.hotelImages 
       }
       
     if(this. editId){
    this.apiCallService.putApiCall(endpoint,request, this. editId).subscribe((res: any)=>{
      console.log(res);
    })
    this.toaster.success('Hotel Update data Successfull', "Congratulations!!")
    // this.toaster.success(`Hotel Update data Successfull ${this.hotelForm.value[0].OwnerName}`,`Congratulations!!  `)
     }
      else{
this.apiCallService.postApiCall(endpoint,request).subscribe((resp:any)=>{
  console.log(resp);
  
})
 
}
this.router.navigateByUrl('owner/ownerSuccess');  
this.toaster.success('Hotel data Successfull', "Congratulations!!")
// this.toaster.success(`Hotel data Successfull ${this.hotelForm.value[0].ownerName}`,`Successfully  `)
   
}



onFileSelected(event:any){
  let images =[...event.target.files]

  let fileNames = images.map((item:any)=>{
    return "assets/newimg/" + item.name
  })
  this.hotelImages = [...fileNames]
}

     ngOnDestroy(){ 
      this.commonService.dataById = {};
      this.commonService.id = '' ;
     }

    //  handleImageInput(event: any) {
    //   const file = event.target.files[0];
    //   this.selectedImage = file;
  
    //   this.hotelForm.patchValue({
    //     image: URL.createObjectURL(file) // Show image preview
    //   });
    // }
} 
 

 


 