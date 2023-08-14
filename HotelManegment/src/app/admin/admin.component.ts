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

   
  home(){
    this.router.navigateByUrl('home');

  }
  login(){
    this.router.navigateByUrl('admin/login');
  }
  signup(){
    this.router.navigateByUrl('admin/signup');
}
   registration(){
  this.router.navigateByUrl('admin/registration');
}
}
