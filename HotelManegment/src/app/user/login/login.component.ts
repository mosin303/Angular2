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
  loginform!: FormGroup;
  ownerData: any;
  journey: any;
  validUser: boolean = false;

  constructor (
    private fB:FormBuilder,
    private router:Router,
    private commonApiCallService:CommonApiCallService,
    private comminService:CommonService,
    private toastr:ToastrService,) { }


  ngOnInit() {
    this.journey = this.comminService.journey
    console.log('journey...',this.journey);
    
    this.formDef();

  }
  formDef() {
    this.loginform = this.fB.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(6),Validators.pattern("^[a-zA-Z0-9]*$")]],
       
    });
  }



  
    async submit(){

      if (this.loginform.valid) 
        
        this.ownerData = await this.commonApiCallService.getApiCall(this.journey).toPromise()
        if(this.ownerData){
          this.ownerData?.find((ownerData:any)=>{
            if(ownerData.Password === this.loginform.value.password 
              && ownerData.Username === this.loginform.value.username ) {
           this.validUser = true
              }
              
            });
            if(this.validUser ){
            this.router.navigateByUrl('userSuccess');
             this.toastr.success(`wel-come ${this.ownerData[0].Username}`,`Successfully login `)
            }
              else  {
               this.toastr.error(`"Please check the password", 'Wrong Password'` )
             }
              
          }      
         }  
     }
  
         

            // async login(){

            //   if (this.loginForm.valid) {
                
            //     this.ownerData = await this.commonApiCallService.getApiCall(this.journey).toPromise();
                   
            //       this.ownerData?.forEach((ownerData:any)=>{
            //         if(ownerData.password === this.loginForm.value.password) {
            //           this.router.navigateByUrl('/admin/adminsuccess');
            //         this.toastr.success(`wel-come ${this.ownerData[0].userName}`,`Successfully login `)  
            //         } 
            //         }
                     
                    
            //          )} 
            //           else {
            //           this.toastr.error(`"Please check the password", 'Wrong Password'` )
            //        }
                   
        
           
          
            
        
           

    
   
  


