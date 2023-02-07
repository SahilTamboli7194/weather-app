import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent  implements OnInit{

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }
  createChart(){

    // this.chart = new Chart("MyChart", {
    //   type: 'scatter', //this denotes tha type of chart

    //   data: {// values on X-Axis
    //     labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
		// 						 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
	  //      datasets: [
    //       {
    //         label: "Sales",
    //         data: ['467','576', '572', '79', '92',
		// 						 '574', '573', '576'],
    //         backgroundColor: 'blue'
    //       },
    //       {
    //         label: "Profit",
    //         data: ['542', '542', '536', '327', '17',
		// 							 '0.00', '538', '541'],
    //         backgroundColor: 'limegreen'
    //       }
    //     ]
    //   },
    //   options: {
    //     aspectRatio:2.5
    //   }

    // });

    var xyValues = [
      {x:50, y:7},
      {x:60, y:8},
      {x:70, y:8},
      {x:80, y:9},
      {x:90, y:9},
      {x:100, y:9},
      {x:110, y:10},
      {x:120, y:11},
      {x:130, y:14},
      {x:140, y:14},
      {x:150, y:15}
    ];

    this.chart  = new Chart("MyChart", {
      type: "scatter",
      data: {
        datasets: [{
          pointRadius: 4,
          pointBackgroundColor: "rgba(0,0,255,1)",
          data: xyValues
        }]
      },
      // options:{...}
    });

  }

}
