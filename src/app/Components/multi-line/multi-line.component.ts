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
  @Input() params !: string [];

  public chart: any;

  chartDataSets : any [] = [];

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.createChart();
    this.chart.update();

  }

  createChart(){

    this.updateDataSet();
    if(this.chart){
      this.chart.destroy();
    }


    var xValues = this.chartData[this.dataType].time;

    this.chart = new Chart("MyChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets : this.chartDataSets,
      },

    });



    console.log(this.chartDataSets,'chart ');
  }

  updateDataSet()
  {
    this.chartDataSets = [];
     var color = ['red','green'];
      this.params.forEach((value,index)=>{
        var newObject: object = {
          label:value.replace(/_/g, ' ').replace(/\b\w/g, function(l) { return l.toUpperCase() }),
          data: this.chartData[this.dataType][value],
          // borderColor: color[index],
          // fill: true,
        }

        this.chartDataSets.push(newObject);
      });
  }


}
