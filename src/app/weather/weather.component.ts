import { Component, OnInit } from '@angular/core';
import { WeatherModel } from '../modules/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData!: WeatherModel;
  cityName: string = 'Vlore';

  constructor(private weatherService: WeatherService) {

  }
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    // HERE WE CALL THE SERVICE
    // AND THAT SERVICE IS FETCHING THE DATA
    this.weatherService.getWeatherData(cityName)
      .subscribe(response => {
        this.weatherData = response;
        console.log(response)
      })
  }

}
