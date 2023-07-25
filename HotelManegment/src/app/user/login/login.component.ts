import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform!: FormGroup;

  constructor (
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
}
