import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=';
  apiUrl = '&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric';
  constructor(private http: HttpClient) { }

  get(city:string){
   return  this.http.get(this.apiKey+city+this.apiUrl);
  }
}
