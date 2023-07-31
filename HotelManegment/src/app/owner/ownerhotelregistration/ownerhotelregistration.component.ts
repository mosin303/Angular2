import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';
 
@Component({
  selector: 'app-ownerhotelregistration',
  templateUrl: './ownerhotelregistration.component.html',
  styleUrls: ['./ownerhotelregistration.component.scss']
})
export class OwnerhotelregistrationComponent {
  hotelForm!:FormGroup;
  data: any;
  postApiResponse: any;
  journey!: string;
  postResponse: any;
  endpoint!: string;
  formData:any;
  fData:any;
  tableHeading : any[]= ["id",' fullName ', "mobNo",  "email", "city","address","gender","password","confirmPassword"];
  // constructor( private router:Router,
  //   private fb:FormBuilder,
  //   private apidata:CommonApiCallService,){}
  
  constructor(
    private builder: FormBuilder,
     private router:Router,
    private toastr : ToastrService, private fB:FormBuilder,
    private apiCallService:CommonApiCallService,
    private commonService:CommonService,
    private toaster:ToastrService ){ }

  ngOnInit(){ 
    
    this.endpoint = 'hotels';
    if(this.journey != 'update')
    console.log(this.endpoint);     
    this.formdata()
  }
  formdata(){
  this.hotelForm = this.builder.group({
    name : ['',[Validators.required]],
    phone :['',[Validators.required]],
    email :['',[Validators.required]],
    menu : ['',[Validators.required]],
    discription : ['',[Validators.required]],
    address : ['',[Validators.required]],
    arooms : ['',[Validators.required]],
    workers : ['',[Validators.required]],
  })
}

  hotelRegistr(){
    let urlEndPointToGetData = 'hotels';
      let request = {
        name : this.hotelForm.value.name,
        phone : this.hotelForm.value.phon,
        email : this.hotelForm.value.email,
        menu:this.hotelForm.value.menu,
        discription : this.hotelForm.value.discription,
        address : this.hotelForm.value.address,
        arooms : this.hotelForm.value.arooms,
        workers : this.hotelForm.value.workers,
      }
    if(this.hotelForm.valid) {
        console.log(this. hotelForm.value);
        this.apiCallService.postApicall(this.endpoint,request).subscribe(resp=>{
          console.log(resp);
          this.postResponse =resp;
          
        })
         this.toaster.success('Hotel Registration Successfull', "Congratulations!!")
    
         this.router.navigateByUrl('owner/hoteldetails');
    }
    else{
      this.apiCallService.putApiCall(this.endpoint,request,'').subscribe(res=>{
        console.log(res);
        
      })
     }
    }
    // hotelRegistr(){
    //  let urlEndPointToGetData = 'hotels';
    //  this.apiCallService.getApiCall(urlEndPointToGetData).subscribe(data =>{
    //    console.log('get data',data);
    //    this.formData = data
    //  })
    //  this.router.navigateByUrl('owner/hoteldetails');
   
   
  
  
  cancel(){
  this.router.navigateByUrl('owner/hoteldetails');
}

}


  //     if(this.data){
  //       this.commonApiCallService.updateHotel(this.data.id, this.hotelForm.value).subscribe({
  //         next: (val:any) => {
  //           this.toastr.success('Hotel Detail Updated Successfully !!');
  //           this.dialog.close(true);
  //         },
  //         error: (err:any)=>{
  //           this.toastr.error("some error occurred")
  //         }
  //       })
  //     }else {
  //       console.log(this.hotelForm.value)
  //     this.commonApiCallService.registerHotel(this.hotelForm.value).subscribe({
  //       next: (val:any) => {
  //         this.toastr.success('Hotel Registration Successfull', "Congratulations!!");
  //         this.dialog.close(true);

  //       },
  //       error: (err:any)=>{
  //         this.toastr.error("some error occurred")
  //       }
  //     })
  //     }
   



