import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { DoialogComponent } from 'src/app/owner/doialog/doialog.component';

@Component({
  selector: 'app-adminsuccess',
  templateUrl: './adminsuccess.component.html',
  styleUrls: ['./adminsuccess.component.scss']
})
export class AdminsuccessComponent {

  userHotelDetails: any[] = []
  searchBoxVal: any;
  formData:any;
  hotelData:any;
  hotelOwner: any;
 hotelDetails:any;
 showTable:boolean=false;
 tableOwner : any[]=["Username" ,"Name" ,"Mobile", "Pancard" ,"Password" ,"Email","Gender" ];
  tableBookNow : any[]=["UserName" , "AdharNo" , "Mobile" , "Amount"];
  tableHotl : any[]= [  "Owner Name",	"Owner Contact",	"Hotel Name",	"Hotel Address"	,"Hotel Contact",	"Hotel Menu"	,"RoomAvailable",	"Delete"];

  
  constructor(private fB:FormBuilder,
    private router:Router,
    private apiCallService:CommonApiCallService,
    private toaster:ToastrService ,public dialog: MatDialog ){}

     
    ngOnInit(): void {
      console.log('....')



    }
      async myHotelDetails(){
      this.showTable = !this.showTable;
     let userHotelDetails ='hotel';
    this.hotelData = await this.apiCallService.getData(userHotelDetails). toPromise();
       
     
    }

    async delete(id: number) {
      const dialogRef = this.dialog.open(DoialogComponent, {
       width: '250px',
       height:'250px'
      })
      dialogRef.afterClosed().subscribe((yasValue:any)=>{
       if(yasValue === 'YES'){
         this.deleteRecord(id);
        
           this.myHotelDetails();
       }
      });
     }
 
 async deleteRecord(id:number){     
     await this.apiCallService.deleteApiCall('hotel', id).toPromise();
     
   }

  async hotleBooking(){
    this.showTable = !this.showTable;
    let booking ='hotelBooking';
    this.formData = await this.apiCallService.getData(booking). toPromise();
       
  }

  // async hotleOwner(){
     
  //   let hotelOwner ='owner';
  //   this.hotelOwner = await this.apiCallService.getData(hotelOwner). toPromise();
       
  // }

}
