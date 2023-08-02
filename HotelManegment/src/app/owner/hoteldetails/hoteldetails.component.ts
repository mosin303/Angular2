import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';

@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrls: ['./hoteldetails.component.scss']
})
export class HoteldetailsComponent {

  hotelDetails:any;
  userName!: string;
  userHotelDetails:any ;
  showTable: any;
   
  

    constructor(private router:Router,
       
      private apiCallService:CommonApiCallService){
}
ngOnInit(): void {
   
  console.log('....')
  this.getdata()
   
  
}

 logout(){
    this.router.navigateByUrl('owner/ownerHome')
  }

  

getdata(){
    let urlEndPointToGetData  = 'hotel';
    this.apiCallService.getApiCall(urlEndPointToGetData).subscribe(data =>{
      console.log('get data',data);
      this.userHotelDetails = data
    })
   }

   onDeleteHotel(id: number) {
     this.apiCallService.deleteHotel(id).subscribe({
      next: (res) => {
        alert('hotel deleted');
      },
      error: console.log,
     });
  }
}

    

  
// -------------------------------------------------------------------------------------







//   fData:any;
//   hotelForm: any;
//   constructor( private fb:FormBuilder,
//     private router:Router,
//     private apidata:CommonApiCallService,){}   
//        ngOnInit(): void {
//         console.log('....')
//       //  this.getdata();
//        let urlEndPointToGetData = 'hotel';
//         this.apidata.getData(urlEndPointToGetData).subscribe((response) => {
//           this.hotelForm = response;
//         });
//       }
// // getdata(){
// //   let urlEndPointToGetData = 'hotels';
// //   this.apidata.getApiCall(urlEndPointToGetData).subscribe(data =>{
// //     console.log('get data',data);
// //     this.hotelForm = data
// //   }) 
// // }
// getApi(){
//   this.router.navigateByUrl('owner/hoteldetails');
// }
// delete(){
//   this.apidata.deletApicall('posts',4).subscribe(resp=>{
//     console.log('delet respo',resp);
    
//   })
//  }
 
 