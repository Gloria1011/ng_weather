import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // to connect to api and get data that why we have use http.get
  getWeatherData(cityName: string): Observable<any> {
    const options = {
      'X-RapidAPI-Key': 'dc7f7f51fcmsh71de0001497caedp1c4e48jsnfe6302caecdc',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    };

    let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`
    return this.http.get(url, { headers: new HttpHeaders(options) });
  }

}
