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
    
    console.log(this.endpoint);     
    this.formdata()
  }
  formdata(){
  this.hotelForm = this.builder.group({
    name : ['',[Validators.required]],
    ownerName : ['',[Validators.required]],
    phone :['',[Validators.required]],
    email :['',[Validators.required]],
    menu : ['',[Validators.required]],
    discription : ['',[Validators.required]],
    address : ['',[Validators.required]],
    arooms : ['',[Validators.required]],
    
  })
}

onSubmit(){
    
      let request = {
        name : this.hotelForm.value.name,
        ownerName : this.hotelForm.value.ownerName,
        phone : this.hotelForm.value.phone,
        email : this.hotelForm.value.email,
        menu:this.hotelForm.value.menu,
        discription : this.hotelForm.value.discription,
        address : this.hotelForm.value.address,
        arooms : this.hotelForm.value.arooms,
         
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
    }
    
    
  
  
 

 