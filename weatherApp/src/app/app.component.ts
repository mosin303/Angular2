import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  weatherData: any;

  constructor(private weather:WeatherService){};

  getData(city:any){
    this.weather.get(city).subscribe(res=>{
      this.weatherData =res ;
    })
  }
}
