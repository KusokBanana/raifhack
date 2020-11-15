import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class ApexChartService {
  @Output() changeTimeRange: EventEmitter<any> = new EventEmitter();
  @Output() changeSeriesData: EventEmitter<any> = new EventEmitter();
  @Output() updateData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  eventChangeTimeRange() {
    this.changeTimeRange.emit();
  }

  eventChangeSeriesData(series: any) {
    this.changeSeriesData.emit(series);
  }

  update() {
    this.changeSeriesData.emit();
  }
}
