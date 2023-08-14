import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  adminForm!:FormGroup;
  loginForm!:FormGroup;
  showForm:boolean=false;
  journey!: string;
  result: any;
  ownerData:any;
  validUser: any;
  Form:any;
   
   

  constructor(private router:Router,
    private commonApiCallService:CommonApiCallService,
    private fB:FormBuilder,private commonService:CommonService,
    private toastr:ToastrService){

  }
      ngOnInit(){
        this.journey = this.commonService.journey;
        console.log('this.journey',this.journey);
      this. FormData();
      this.loginData();
      }

 FormData(){
  this.adminForm = this.fB.group({
    userName:['',Validators.required],
    name:['',Validators.required],
    pan:['',Validators.required],
    city:['',Validators.required],
    email:['',Validators.required],
    mobile:['',Validators.required],
    gender:['',Validators.required],
    password:['',Validators.required],
    confirmPassword:['',Validators.required],
  })
 }

 loginData(){
this.loginForm =this.fB.group({
  userName:[''],
  password:[''],
})
 }



 async onSubmit(){
   let request ={
    userName: this.adminForm.value.userName,
    name: this.adminForm.value.name,
    pan: this.adminForm.value.pan,
    city: this.adminForm.value.city,
    email: this.adminForm.value.email,
    mobile: this.adminForm.value.mobile,
    gender: this.adminForm.value.gender,
    password: this.adminForm.value.password,
    confirmPassword: this.adminForm.value.confirmPassword,
   }
   this.Form = await this.commonApiCallService.postApiCall(this.journey,request).toPromise()
    
   this.toastr.success(`wel-come ${this.adminForm.value.userName}`,`Successfully login `)
    this.router.navigateByUrl('/admin/adminsuccess')
     
  }


  async login(){

    if (this.loginForm.valid) 
   
      
      this.ownerData = await this.commonApiCallService.getApiCall(this.journey).toPromise();
         if( this.ownerData ){
        this.ownerData?.forEach((ownerData:any)=>{
          if(ownerData.password === this.loginForm.value.password 
            && ownerData.userName === this.loginForm.value.userName) {
           this.validUser = true
          } 
          })
             if(this.validUser){
            this.router.navigateByUrl('/admin/adminsuccess');
          this.toastr.success(`wel-come ${this.ownerData[0].userName}`,`Successfully login `)  
          }
           
            else {
            this.toastr.warning(`"Please check the password", 'Wrong Password'` )
         }
             
          }  
        }
         
       
        
        
      
         
      
  

   

  

  showlogin(){
    this.showForm = !this.showForm;
    this.loginData();
  }

  
  signUp(){
    this.showForm = !this.showForm;
    this.FormData();
  }

}

 

// if(this.matchFound.length){
//   // alert(`wel-come ${this.matchFound[0].firstname}`);
//   this.toaster.success(`wel-come ${this.matchFound[0].firstname}`, `Successfully Loggedin`);
 
 