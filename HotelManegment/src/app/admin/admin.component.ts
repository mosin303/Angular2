import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private router:Router,
    private commonService:CommonService ){}

  // journey(journey:string){
  //   if(journey === 'admin'){
  //     this.commonService.journey = 'admin'
  //     this.router.navigateByUrl('admin');
  //   }
  //   else  if(journey === 'owner'){
  //     this.commonService.journey = 'owner'
  //     this.router.navigateByUrl('owner');
  //   }
  //   else  if(journey === 'home'){
  //     this.commonService.journey = 'home'
  //     this.router.navigateByUrl('home');
  //   }
  //   else{
  //     this.commonService.journey = 'user'
  //     this.router.navigateByUrl('user');
  //   }
    
  // }
  home(){
    this.router.navigateByUrl('home');

  }
  login(){
    this.router.navigateByUrl('login');
  }
}
