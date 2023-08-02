import { Component } from '@angular/core';
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],

  
})
export class RegistrationComponent {
  showSignupBox = true;

  showLogin() {
    this.showSignupBox = false;
  }

  showSignup() {
    this.showSignupBox = true;
  }
}
 