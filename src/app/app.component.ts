import { Component, OnInit } from '@angular/core';
import { IWeather } from './shared/model/weather.model';

import { WeatherService } from './shared/server/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  weather!: IWeather;

  city: string = '';

  constructor(private weatherService: WeatherService){

  }
  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    this.weatherService.getWeatherByCity(this.city).subscribe((response: IWeather) =>{
      this.weather = response;
    })

  }
}
