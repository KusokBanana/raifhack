import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

interface Result {
  data: CategoryCount[];
}

interface CategoryCount {
  category_name: string;
  count: number;
}

@Component({
  selector: 'app-categories',
  templateUrl: './component.html',
//   styleUrls: ['./component.scss']
})
export class CategoriesComponent {

  public counts$ = this.http.get<Result>('http://130.193.56.209:8000/categories/counts').pipe(
    map(result => result.data),
  )
  
  public data$ = this.counts$.pipe(
    map(counts => ({
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          // columnWidth: '55%',
          // endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      // colors: ['#0e9e4a', '#4099ff', '#FF5370'],
      // stroke: {
      //   show: true,
      //   width: 2,
      //   colors: ['transparent']
      // },
      series: [
        {
          name: "basic",
          data: counts.map(c => c.count)
        }
      ],
      xaxis: {
        categories: counts.map(c => c.category_name)
      },
      // yaxis: {
      //   title: {
      //     text: '$ (thousands)'
      //   }
      // },
      // fill: {
      //   opacity: 1
  
      // },
      // tooltip: {
      //   y: {
      //     formatter: (val) => '$ ' + val + ' thousands'
      //   }
      // }
    })),
  );

  constructor(private http: HttpClient) {}
}