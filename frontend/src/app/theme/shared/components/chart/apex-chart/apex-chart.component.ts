import { Component, Input, OnChanges, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts/dist/apexcharts.common.js';

import { ApexChartService } from './apex-chart.service';

@Component({
  selector: 'app-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss']
})
export class ApexChartComponent implements OnInit, OnChanges {
  @Input() chartID: string;
  @Input() chartConfig: any;
  @Input() xAxis: any;
  @Input() newData: any;
  @Input() categoryName: string;

  public chart: any;

  constructor(private apexEvent: ApexChartService) { }

  ngOnInit() {
    setTimeout(() => {
      this.chart = new ApexCharts(document.querySelector('#' + this.chartID), this.chartConfig);
      console.log(this.chart, this.chartConfig, 'this');
      this.chart.render();
    });

    this.apexEvent.changeTimeRange.subscribe(() => {
      if (this.xAxis) {
        this.chart.updateOptions({
          xaxis: this.xAxis
        });
      }
    });

    // this.apexEvent.changeSeriesData.subscribe(series => {
    //   console.log(series, this.chart, 'series');
    //   if (this.newData && this.chart) {
    //     this.chart.updateSeries([{
    //       data: series
    //     }]);
    //   }
    // });

    // this.apexEvent.updateData.subscribe(() => {
    //   if (this.chart) {
    //     this.chart.updateSeries([{
    //       data: this.chart
    //     }]);
    //   }
    // });
  }

  ngOnChanges() {
    if (this.newData && this.chart) {
      this.chart.updateSeries([{
        data: this.newData, name: this.categoryName || '',
      }]);
    }
  }

}
