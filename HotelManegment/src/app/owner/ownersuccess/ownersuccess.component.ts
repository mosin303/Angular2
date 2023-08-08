import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';
 
import { DoialogComponent } from '../doialog/doialog.component';

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
  dataById: any;
  searchBoxVal:any;

  constructor(private router: Router, private commonApiCallService: CommonApiCallService,
    private commonService: CommonService, private toastr: ToastrService,public dialog: MatDialog) { }

  ngOnInit() {
    console.log('oninit calling');
    this.userName = this.commonService.userName

  }

  hotelRegistration() {
    this.router.navigateByUrl('owner/newhotel')
  }

  async myHotelDetails() {
    this.showTable = !this.showTable;
    let endPoint = 'hotel';

    this.hotelDetails = await this.commonApiCallService.getApiCall(endPoint).toPromise()
    console.log('hotel', this.hotelDetails);
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
     const dialogRef = this.dialog.open(DoialogComponent, {
      width: '250px',
      height:'250px'
     })
     dialogRef.afterClosed().subscribe((yasValue:any)=>{
      if(yasValue === 'YES'){
        this.deleteRecord(id);
        this.showTable = !this.showTable;
          this.myHotelDetails();
      }
     });
    }

async deleteRecord(id:number){     
    await this.commonApiCallService.deleteApiCall('hotel', id).toPromise();
    
  }

  async edit(id: number) { 
    this.commonService .id= id;
    this.dataById = await this.commonApiCallService.editApiCall('hotel', id).toPromise();
    this.commonService.dataById = this.dataById;
       this.router.navigateByUrl('owner/newhotel')
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