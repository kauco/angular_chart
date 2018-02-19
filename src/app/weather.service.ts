import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }
  
  dailyForcast(){
	return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Geneva,CH&appid=f98712c08f093863eb7abdff4bb11181")
		.map(result =>result);
  }

}
