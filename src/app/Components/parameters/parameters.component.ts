import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WetherServiceService } from 'src/app/Services/wether-service.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit,OnChanges{

  dParams !: string [];
  hParams !: string [];

  temp = new Set();

  constructor (private wetherService:WetherServiceService){}

  ngOnInit(): void {
   this.getDailyParams();
   this.getHourlysParams();
  }

  ngOnChanges(): void {

  }

  getHourlysParams()
  {
      this.dParams = this.wetherService.fetchHourlyParmas();
  }

  getDailyParams()
  {
    this.hParams = this.wetherService.fetchDailyParams();
  }

  change($event :any)
  {
    const val = $event.target.value;
    this.temp.has(val) ? this.temp.delete(val) : this.temp.add(val);
  }

}
