import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  journey!:string;
  userName! :string;
  forgotPassword!:boolean;
  id!:any;
  dataById: any;
  constructor(private toastrService :ToastrService) { }

  warningToaster( msg:any, title:any, configuration:any ){
    this.toastrService.warning( msg, title, configuration)
}
successToastar(){
this.toastrService.success(`SignUp`,`Successful`)
}

whiteSpaceValidator(name:any){
  let data = name.value;
  let newdata = data?.trim();
  let isValid = data.length != newdata.length ;
  return isValid ? {whiteSpace:true} : null
}
}

