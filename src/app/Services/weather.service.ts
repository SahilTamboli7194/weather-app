import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "https://api.open-meteo.com/v1/forecast?";

  private dailyParmas: string[] = [
    "temperature_2m_max",
    "temperature_2m_min",
    "apparent_temperature_max",
    "apparent_temperature_min",
    "precipitation_sum",
    "rain_sum",
    "showers_sum",
    "snowfall_sum",
    "precipitation_hours",
    "weathercode",
    "sunrise",
    "sunset",
    "windspeed_10m_max",
    "windgusts_10m_max",
    "winddirection_10m_dominant",
    "shortwave_radiation_sum",
    "et0_fao_evapotranspiration"
  ];

  private hourlyParams : string [] =[
    "temperature_2m",
    "relativehumidity_2m",
    "dewpoint_2m",
    "apparent_temperature",
    "pressure_msl",
    "surface_pressure",
    "cloudcover",
    "cloudcover_low",
    "cloudcover_mid",
    "cloudcover_high",
    "windspeed_10m",
    "windspeed_80m",
    "windspeed_120m",
    "windspeed_180m",
    "windgusts_10m",
    "winddirection_10m",
    "winddirection_80m",
    "winddirection_120m",
    "winddirection_180m",
    "shortwave_radiation",
    "direct_radiation",
    "direct_normal_irradiance",
    "diffuse_radiation",
    "vapor_pressure_deficit",
    "cape",
    "evapotranspiration",
    "et0_fao_evapotranspiration",
    "snowfall",
    "rain",
    "showers",
    "weathercode",
    "snow_depth",
    "freezinglevel_height",
    "visibility",
    "soil_temperature_0cm",
    "soil_temperature_6cm",
    "soil_temperature_18cm",
    "soil_temperature_54cm",
    "soil_moisture_0_1cm",
    "soil_moisture_1_3cm",
    "soil_moisture_3_9cm",
    "soil_moisture_9_27cm",
    "soil_moisture_27_81cm",
  ]

  getCityWetherData(
    lat: number,
    lon: number,
    params: string[],
    dataType: string,
    timezone: string,
    startDate: string,
    endDate: string,
  ) {
    const par = params.toString();
    return this.httpClient.get(
      this.baseUrl + "latitude=" + lat + "&longitude=" + lon +
      "&current_weather=true&" + dataType + "=" + par +
      "&timezone=" + timezone +
      "&start_date=" + startDate +
      "&end_date=" + endDate);

  }

  fetchDailyParams()
  {
    return this.dailyParmas;
  }

  fetchHourlyParmas()
  {
    return this.hourlyParams;
  }
}
