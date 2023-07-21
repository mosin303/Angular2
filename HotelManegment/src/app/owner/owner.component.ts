import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent {
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
