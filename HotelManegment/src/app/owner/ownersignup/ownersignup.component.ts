import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {
  signinform!: FormGroup;
  journey!:string;
  postResponse:any;

  constructor (private router:Router,
    private fB:FormBuilder,
    private commonService:CommonService,
    private apiCallService :CommonApiCallService ) { }


  ngOnInit() {
    this.formDef();
    this.journey = this.commonService.journey;
    console.log('this.journey',this.journey);
    

  }
  formDef() {
    this.signinform = this.fB.group({
      id: ['',[Validators.required]],
      name: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*$")]],
      pan: ['',[Validators.required, Validators.pattern("^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$")]],//ABMAS2345M
      mobNo: ['', [Validators.required,Validators.pattern("[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      password: ['',[Validators.required, Validators.minLength(6),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}$")]],
      email: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gender:['',[Validators.required]],
    })
  }

  submit(){
    let request = {
      Username : this.signinform.value.id,
      Name : this.signinform.value.name,
      Mobile : this.signinform.value.mobNo,
      Pan:this.signinform.value.pan,
      Password : this.signinform.value.password,
      Email : this.signinform.value.email,
      Gender : this.signinform.value.gender,
    }

    this.apiCallService.postApicall(this.journey,request).subscribe(resp=>{
      console.log(resp);
      this.postResponse =resp;
      
    })

     this.router.navigateByUrl('owner/ownerSuccess');
      


}

signIn(){
  this.router.navigateByUrl('owner/ownerSignIn');
}
}
