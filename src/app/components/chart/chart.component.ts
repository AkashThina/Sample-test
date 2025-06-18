import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
 
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Inventory Levels Report'
    },
    xAxis: {
      categories: [
        'Laptop', 'Smartphone', 'Tablet', 'Headphones', 'Monitor',
        'Keyboard', 'Mouse', 'Charger', 'Webcam', 'Speaker'
      ],
      title: {
        text: 'Product Name'
      }
    },
    yAxis: {
      title: {
        text: 'Quantity in Stock'
      }
    },
    tooltip: {
      valueSuffix: ' units'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true
        },
        borderWidth: 0,
        colorByPoint: true
      }
    },
    series: [{
      name: 'Inventory Levels',
      type: 'column',
      data: [
        { y: 150, color: '#1f77b4' },
        { y: 200, color: '#ff7f0e' },
        { y: 120, color: '#2ca02c' },
        { y: 300, color: '#d62728' },
        { y: 250, color: '#9467bd' },
        { y: 180, color: '#8c564b' },
        { y: 220, color: '#e377c2' },
        { y: 350, color: '#7f7f7f' },
        { y: 100, color: '#bcbd22' },
        { y: 75,  color: '#17becf' }
      ]
    }]
  };
 

  constructor() { }

  ngOnInit(): void {
  }

}
