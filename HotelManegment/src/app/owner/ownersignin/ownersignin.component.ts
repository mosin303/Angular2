import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownersignin',
  templateUrl: './ownersignin.component.html',
  styleUrls: ['./ownersignin.component.scss']
})
export class OwnersigninComponent {
  loginform!: FormGroup;

  constructor (private router:Router,
    private fB:FormBuilder) { }


  ngOnInit() {
    this.formDef();

  }
  formDef() {
    this.loginform = this.fB.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(6),Validators.pattern("^[a-zA-Z0-9]*$")]],
       
    });
  }

  submit(){
    console.log(this.loginform.value);

}
signUp(){
this.router.navigateByUrl('owner/ownerSignUp')
}

}
