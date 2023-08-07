import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';

@Component({
  selector: 'app-usersuccess',
  templateUrl: './usersuccess.component.html',
  styleUrls: ['./usersuccess.component.scss']
})
export class UsersuccessComponent {
  hotelForm!: any;
  data:any;
  showTable: any;

   

  
  constructor(private router:Router,
    private apidata:CommonApiCallService, ){}

     
    ngOnInit(): void {
      console.log('....')
      
     let urlEndPointToGetData ='hotel';
      this.apidata.getData(urlEndPointToGetData).subscribe((response) => {
        this.hotelForm = response;
      });
    }

logout(){
  this.router.navigateByUrl('home')
}

 
}
