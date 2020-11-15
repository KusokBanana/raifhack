import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from '../../interfaces';

const sales = {
  Jan: 10,
  Feb: 41,
  Mar: 35
};

@Component({
  selector: 'app-analytics',
  templateUrl: './component.html',
//   styleUrls: ['./component.scss']
})
export class AnalyticsComponent {

  public category: Category;
  
  public data$ = of(sales).pipe(
    map(data => ({
      chart: {
        height: 300,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false,
        width: 2,
      },
      stroke: {
        curve: 'straight',
      },
      colors: ['#4099ff'],
      series: [
        {
          name: 'Desktops',
          data: Object.values(data),
        }
      ],
      title: {
        text: 'Продажи',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f6ff', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: Object.keys(data),
      }
    }))
  );

  public setCategory(value: Category) {
    this.category = value;
  }

}
