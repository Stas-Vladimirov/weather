import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from 'src/app/shared/model/weather.model';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent implements OnInit {

  @Input()
  weather!:IWeather;

  constructor() { }

  ngOnInit(): void {
  }

  getIcon(iconName: string): string {
    return `http://openweathermap.org/img/w/${iconName}.png`
  }

}
