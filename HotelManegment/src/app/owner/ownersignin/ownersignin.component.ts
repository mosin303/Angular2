import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownersignin',
  templateUrl: './ownersignin.component.html',
  styleUrls: ['./ownersignin.component.scss']
})
export class OwnersigninComponent {
  loginform!: FormGroup;
  journey!:string;
  ownerData : any;
  validUser: boolean = false;
  forgetPasswordForm!:FormGroup;
  showForgetPasswordForm: boolean = false;
  // forgetPasswordForm!:FormGroup;
  // showForgetPasswordForm: boolean = false;
  constructor (private router:Router,
    private fB:FormBuilder,
    private commonApiCallService:CommonApiCallService,
    private commonService:CommonService,
    private toaster:ToastrService) { }


  ngOnInit() {
     this.formDef();
     
    this.journey = this.commonService.journey;
    console.log('this.journey',this.journey);
    this.getOwnerApiData()
  }
  formDef() {
    this.loginform = this.fB.group({
      userName: ['',[Validators.required]],
      password: ['',[Validators.required,]],
       
    })
  }
  forgoPasswordFormDetails(){
    this.forgetPasswordForm = this.fB.group({
      newPassword:[],
      confirmPassword:[]
    })
  }

  login(){
    console.log(this.loginform.value);
    if(this.loginform.value.userName ){
      this.commonService.userName = this.loginform.value.userName ;
    }
    this.getOwnerApiData();
    console.log('this.ownerData', this.ownerData);

    if (this.ownerData) {
      this.isValidUser();
      if (this.validUser) {
        this.toaster.success(`login`,`Successful`) 
        this.router.navigateByUrl('owner/hoteldetails');
      }
      else {
        this.toaster.error(`"Please check the password", 'Wrong Password' `)
        this.router.navigateByUrl('owner/ownerHome');
      }
    }
  }
   async getOwnerApiData(){
    this.ownerData =await this.commonApiCallService.getApiCall(this.journey).toPromise()
    console.log('this.ownerData',this.ownerData);
    
  }

  isValidUser(){
    this.ownerData?.forEach((ownerData:any)=>{
      if(ownerData.UserName === this.loginform.value.id && ownerData.Password === this.loginform.value.password) {
        this.validUser = true;
      }     
    });
    return
  }
signUp(){
this.router.navigateByUrl('owner/ownerSignUp')
}



forgetPassword(){
  this.showForgetPasswordForm = !this.showForgetPasswordForm;
  this.forgoPasswordFormDetails();
}

submit(){
  if(this.ownerData ){
    this.updatePassword();
   }
   else{
     this.getOwnerApiData();
     this.updatePassword();
   }
   this.showForgetPasswordForm = !this.showForgetPasswordForm;
}
updatePassword(){
  var user:any;
  this.ownerData?.forEach((data:any)=>{
    if(data.UserName ===  this. loginform.value.userName){
      user = data;
    }
    console.log('user',user);
    
  }) 
  if(user){
    let request = {
      Password : this.forgetPasswordForm.value.newPassword
    }
      this.commonApiCallService.patchApiCall(this.journey,request,user.id ).subscribe((respo:any)=>{
        console.log(respo);
        
      })
  }
}

}
