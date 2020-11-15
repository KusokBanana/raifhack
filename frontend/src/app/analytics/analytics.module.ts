import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbDropdownModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

import { ApexChartService } from '../theme/shared/components/chart/apex-chart/apex-chart.service';
import { SharedModule } from '../theme/shared/shared.module';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AnalyticsRoutingModule,
    HttpClientModule,
    NgbPopoverModule,
    NgbDropdownModule,
  ],
  declarations: [components],
  providers: [
    ApexChartService,
  ]
})
export class AnalyticsModule { }
