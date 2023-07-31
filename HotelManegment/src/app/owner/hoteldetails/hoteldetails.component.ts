import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';

@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrls: ['./hoteldetails.component.scss']
})
export class HoteldetailsComponent {
  
  fData:any;
  formHeading : any[]= [ "Name", "Email","Menu","Discription", "Address","Rooms","Workers"];
  hotelForm: any;
  constructor( private fb:FormBuilder,
    private router:Router,
    private apidata:CommonApiCallService,){}

    ngOnInit(){
      console.log('....')
       this.getdata();
      

}
 

getdata(){
  let urlEndPointToGetData = 'hotels';
  this.apidata.getApiCall(urlEndPointToGetData).subscribe(data =>{
    console.log('get data',data);
    this.hotelForm = data
  })
  
}
getApi(){
  this.router.navigateByUrl('owner/hoteldetails');
}
// delete(){
//   this.apidata.deletApicall('posts',4).subscribe(resp=>{
//     console.log('delet respo',resp);
    
//   })
//  }
 
  logout(){
    this.router.navigateByUrl('owner/ownerHome')
  }
}
