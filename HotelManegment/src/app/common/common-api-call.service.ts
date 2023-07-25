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
}
