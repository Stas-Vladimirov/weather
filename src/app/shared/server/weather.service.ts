import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from '../model/weather.model';

const API_KEY = "352741d86d3c4c3b0c6c68bd92e90efa";

const API_URL = "https://api.openweathermap.org/data/2.5";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherByCity(city: string): Observable<IWeather>{
    return this.httpClient.get<IWeather>(`${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  }
}
