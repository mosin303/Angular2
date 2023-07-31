import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {
  journey!:string;
  url = ' http://localhost:3000/' ;

  constructor(private http: HttpClient) { }

  postApicall(endPoint:string,formdata:any){
let url = this.url + endPoint;
return this.http.post(url,formdata);
  }

  getApiCall(endPoint:string){
    let url = this.url + endPoint ;
    return this.http.get(url);
  }
  putApiCall(endPoint:string, formData:any, id:any){
    let url = this.url + endPoint +'/' + id;
    return this.http.put(url, formData)
  }
  patchApiCall(endPoint:any,data:any,id:number) {
    let url = this.url + endPoint + '/' + id;
    return this.http.patch(url,data) 
  }

}
