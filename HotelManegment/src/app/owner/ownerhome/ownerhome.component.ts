import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {

constructor(private router:Router){

}

home(){
  this.router.navigateByUrl('home');
}
login(){
  this.router.navigateByUrl('owner/ownerSignUp');
}
signIn(){
  this.router.navigateByUrl('owner/ownerSignIn');
}
newhotel(){
  this.router.navigateByUrl('owner/newhotel');
}
}
