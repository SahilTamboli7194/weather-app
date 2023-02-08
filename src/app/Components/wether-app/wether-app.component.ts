import { SelectorListContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CityService } from 'src/app/Services/city.service';
import { WetherServiceService } from 'src/app/Services/wether-service.service';

@Component({
  selector: 'app-wether-app',
  templateUrl: './wether-app.component.html',
  styleUrls: ['./wether-app.component.css']
})
export class WetherAppComponent implements OnInit {

  city = new FormControl ('');

  cityList: any;

  cityLat: number =12.983333;
  cityLon:number = 77.583333;

  cityWetherData :any;

  dataType: string = "daily";
  timezone:string = "IST";

  // for hourly
  // params: string[]  = [
  //   "temperature_2m",
  //   "relativehumidity_2m",
  //   // "windspeed_10m"
  // ];

  // for daily
  params: string[]  = [
    "temperature_2m_max",
        // "temperature_2m_min"
  ];

  constructor (private cityService:CityService, private wetherService:WetherServiceService){}

  ngOnInit(): void {
    this.getWeatherData();
    this.cityList = this.fetchAllCity();

  }

  updateLatLon($event: any)
  {
    let cityInfo = this.cityList.find((city: any) =>city.name == $event.target.value);

    this.cityLat = cityInfo.lat;
    this.cityLon = cityInfo.lon;
    console.log('selected city ',cityInfo.name,this.cityLat,this.cityLon);
    this.getWeatherData();
  }

  fetchAllCity()
  {
    return this.cityService.getCities();
  }

  getWeatherData()
  {
    this.wetherService.getCityWetherData(
      this.cityLat,
      this.cityLon,
      this.params,
      this.dataType,
      this.timezone
      ).subscribe(
      (data)=> {

        this.cityWetherData = data;
        // console.log(this.cityWetherData,'in function');
        // this.makeGraph();
      });
  }

  // makeGraph(){
  //   console.log(this.cityWetherData);
  // }
}