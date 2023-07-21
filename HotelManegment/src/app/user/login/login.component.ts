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
      id: ['',[Validators.required]],
      name: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*$")]],
      mobNo: ['', [Validators.required,Validators.pattern("[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      password: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      email: ['',[Validators.required]],
      gender:['',[Validators.required]],
    });
  }

}
