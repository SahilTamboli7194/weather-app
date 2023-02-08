import { Component, Input, OnChanges, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-multi-line',
  templateUrl: './multi-line.component.html',
  styleUrls: ['./multi-line.component.css']
})
export class MultiLineComponent implements OnInit,OnChanges{

  @Input() chartData:any;
  @Input() dataType !:string;

  public chart: any;

  private chartId !: string;

  // private chartDatasets :any = [{
  //   label:'data one',
  //   data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
  //   borderColor: "red",
  //   fill: true,
  // },{
  //   data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
  //   borderColor: "green",
  //   fill: true
  // },{
  //   data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
  //   borderColor: "blue",
  //   fill: false
  // }];

  // private chartDatasets :any =

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.createChart();

  }
  createChart(){

    if(this.chart){

      this.chart.destroy();
    }
    // var xValues = [100,200,300,400,500,600,700,800,900,1000];
    var xValues = this.chartData[this.dataType].time;

   this.chart = new Chart("MyChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          label:'temperature_2m_max',
          data: this.chartData[this.dataType].temperature_2m_max,
          borderColor: "red",
          fill: true,
        }
      ]
      },

    });
  }


}
