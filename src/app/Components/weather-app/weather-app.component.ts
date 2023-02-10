import { SelectorListContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CityService } from 'src/app/Services/city.service';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-wether-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {

  city = new FormControl ('');

  startDate = new FormControl('2023-02-01');
  endDate  = new FormControl('2023-02-23');

  cityList: any;

  get startDateValue()
  {
    return this.startDate.value as string;
  }

  get endDateValue()
  {
    return this.endDate.value as string;
  }

  // for ban
  // cityLat: number =12.983333;
  // cityLon:number = 77.583333;

  cityLat: number = 25.2702;
  cityLon:number = 91.7323;

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
    // "sunrise",
    // "sunset",
    "windspeed_10m_max",
    // "precipitation_sum"
        "temperature_2m_min"
  ];

  constructor (private cityService:CityService, private wetherService:WeatherService){}

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
      this.timezone,
      this.startDateValue,
      this.endDateValue
      ).subscribe(
      (data)=> {

        this.cityWetherData = data;

      });
  }

  updateData()
  {
      this.getWeatherData();
  }

  step = 3;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
