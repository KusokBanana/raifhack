import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnChanges } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ApexChartService } from 'src/app/theme/shared/components/chart/apex-chart/apex-chart.service';

import { Category } from '../../interfaces';

interface Result {
  data: Transaction[];
}

interface Transaction {
  date: string;
  amount: number;
}

@Component({
  selector: 'app-demand',
  templateUrl: './component.html',
//   styleUrls: ['./component.scss']
})
export class DemandComponent implements OnChanges {

  @Input() category: Category;;

  public change$ = new ReplaySubject<Category>();
  public newData = [];

  public transactions$ = this.change$.pipe(
    map(category => new HttpParams().set('mcc', category.mcc.toString())),
    switchMap(params => this.http.get<Result>('http://localhost:8000/transactions/by-mcc', { params })),
    map(result => result.data),
  );
  
  public data$ = this.transactions$.pipe(
    map(transactions => transactions.map(t => ({ x: t.date, y: t.amount }))),
    tap(newData => this.newData = newData),
    map(series => ({
      chart: {
        height: 300,
        type: 'line',
        zoom: {
          enabled: false
        },
        // animations: {
        //   enabled: true,
        //   easing: 'linear',
        //   dynamicAnimation: {
        //     speed: 2000
        //   }
        // }
      },
      dataLabels: {
        // enabled: false,
        width: 2,
      },
      stroke: {
        // curve: 'smooth',
        curve: 'straight',
      },
      colors: ['#4099ff'],
      series: [
        { data: series, name: this.category.name }
      ],
      // title: {
      //   text: 'Спрос',
      //   align: 'left'
      // },
      grid: {
        row: {
          colors: ['#f3f6ff', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        type: 'date',
      },
      yaxis: {
        // max: 100
      },
      // xaxis: {
      //   categories: transactions.map(t => t.date),
      // }
    })),
    tap(() => {
      // this.intervalSub = setInterval(() => {
      //   this.getNewSeries(this.lastDate, {min: 10, max: 90});
      //   this.apexEvent.eventChangeSeriesData();
      // }, 2000);
      setTimeout(() => {
        this.apexEvent.eventChangeSeriesData(null);
      }, 2000)
  
      // this.intervalMain = setInterval(() => {
      //   this.resetData();
      //   this.apexEvent.eventChangeSeriesData();
      // }, 60000);
    })
  );

  ngOnChanges(): void {
    console.log(this.category);
    if (this.category) {
      this.change$.next(this.category);
    }
  }

  constructor(private http: HttpClient, private apexEvent: ApexChartService) {}
}