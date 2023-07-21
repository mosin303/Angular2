import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(private router:Router,
    private commonService:CommonService ){}

  journey(journey:string){
    if(journey === 'admin'){
      this.commonService.journey = 'admin'
      this.router.navigateByUrl('admin');
    }
    else  if(journey === 'owner'){
      this.commonService.journey = 'owner'
      this.router.navigateByUrl('owner');
    }
    else{
      this.commonService.journey = 'user'
      this.router.navigateByUrl('user');
    }
    
  }
  home(){
    this.router.navigateByUrl('home');

  }
}
