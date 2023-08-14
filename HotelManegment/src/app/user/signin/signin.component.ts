import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signinform!: FormGroup;
  journey!:string;
  postResponse:any;
  data: any;

  constructor (private router:Router,
    private fB:FormBuilder,
    private commonService:CommonService,
    private apiCallService :CommonApiCallService,
    private toaster:ToastrService ) { }


  ngOnInit() {
    this.formDef();
    this.journey = this.commonService.journey;
    console.log('this.journey',this.journey);
    

  }
  formDef() {
    this.signinform = this.fB.group({
      id: ['',[Validators.required]],
      name: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*$"),this.commonService.whiteSpaceValidator]],
      mobNo: ['', [Validators.required,Validators.pattern("[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      pan: ['',[Validators.required, Validators.pattern("^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$")]],
      password: ['',[Validators.required, Validators.minLength(6),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
      email: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gender:['',[Validators.required]],
    })
  }

   async submit(){
    let request = {
      Username : this.signinform.value.id,
      Name : this.signinform.value.name,
      Mobile : this.signinform.value.mobNo,
      Pan :this.signinform.value.pan,
      Password : this.signinform.value.password,
      Email : this.signinform.value.email,
      Gender : this.signinform.value.gender,
    }

     this.data = await this.apiCallService.postApicall(this.journey,request).toPromise()
      
      
     this.router.navigateByUrl('userSuccess');
      this.toaster.success(`wel-come ${this.signinform.value.id}`,`Successfully login `)

      
  }
    
  
       
      
    



home(){
  this.router.navigateByUrl('home');
}
login(){
  this.router.navigateByUrl('login');
}
}
