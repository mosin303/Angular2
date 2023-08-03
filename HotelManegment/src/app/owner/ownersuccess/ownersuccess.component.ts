import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {
  hotelDetails: any;
  userName!: string;
  userHotelDetails: any[] = []
  showTable: any;
  data: any;

  constructor(private router: Router, private commonApiCallService: CommonApiCallService,
    private commonService: CommonService, private toastr: ToastrService) { }

  ngOnInit() {
    console.log('oninit calling');
    this.userName = this.commonService.userName

  }

  hotelRegistration() {
    this.router.navigateByUrl('owner/ownrhotelristation')
  }

  async myHotelDetails() {
    this.showTable = !this.showTable;
    let endPoint = 'hotel';

    this.hotelDetails = await this.commonApiCallService.getApiCall(endPoint).toPromise()
    console.log('hotelDetails', this.hotelDetails);
    this.userHotelDetails = []
    if (this.hotelDetails) {
      this.hotelDetailsByOwner();
      if (this.userHotelDetails.length > 0) {

      }
      else {
        this.toastr.warning('no any hotel avaible', 'warning', {
          timeOut: 10000, positionClass: 'toast-top-center'
        })
      }
    }
    else {
      alert('no owenr data avaible')
    }
  }

  hotelDetailsByOwner() {
    this.hotelDetails.forEach((element: any) => {
      if (element.OwnerName === this.userName) {
        this.userHotelDetails.push(element);
      }
    })
  }

  async delete(id: number) {
    await this.commonApiCallService.deleteApiCall('hotel', id).toPromise();
    this.showTable = !this.showTable;
    this.myHotelDetails();
  }

  edit(id: number) { 
    this.commonApiCallService.journey = "update"
     this.commonApiCallService.editApiCall('hotel', id).subscribe(response=>{
      this.data= response;
  });

  if(this.data) {
    this.commonApiCallService.getDataById = this.data
    this.router.navigateByUrl('owner/newhotel')
  }

}
}

// updateDetails(){this.ApidataSevice.journey = "update"
// this.ApidataSevice.getApiCall('posts','1').subscribe(response=>{
//   this.data= response;
// });

// if(this.data){
//   this.ApidataSevice.getDataById = this.data;
//   this.router.navigateByUrl('student/apicall')
// }