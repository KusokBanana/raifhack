import { Component } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './component.html',
//   styleUrls: ['./component.scss']
})
export class SalesComponent {
  
  data = {
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
    series: [{
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
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
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };;

}
