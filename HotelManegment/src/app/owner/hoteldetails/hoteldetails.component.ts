import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
 
 
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

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
  data:any;
  dataById: any;
  searchBoxVal:any;
  

    constructor(private router:Router,
       private commonService:CommonService,
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
  async edit(id: number) { 
    this.commonService .id= id;
    this.dataById = await this.apiCallService.editApiCall('hotel', id).toPromise();
    this.commonService.dataById = this.dataById;
       this.router.navigateByUrl('owner/newhotel')
  } 

}

    

  
// -------------------------------------------------------------------------------------