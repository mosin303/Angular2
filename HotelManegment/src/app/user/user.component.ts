import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiCallService } from '../common/common-api-call.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  
  constructor(private router:Router,
    private apidata:CommonApiCallService, ){}


    

    home(){
    this.router.navigateByUrl('home');

  }
  login(){
    this.router.navigateByUrl('login');
  }
   
  
}
