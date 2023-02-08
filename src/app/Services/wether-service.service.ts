import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WetherServiceService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl ="https://api.open-meteo.com/v1/forecast?";

  getCityWetherData(lat:number,lon:number,params:string[],dataType:string,timezone:string)
  {
    const par = params.toString();
    return this.httpClient.get(this.baseUrl +"latitude="+lat+"&longitude="+lon+"&current_weather=true&"+dataType+"="+par+"&timezone="+timezone+"&start_date=2022-06-08&end_date=2023-02-23");

  }
}
