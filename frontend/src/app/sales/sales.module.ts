import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../theme/shared/shared.module';
import { components } from './components';
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SalesRoutingModule,
    HttpClientModule,
    NgbPopoverModule,
  ],
  declarations: [components]
})
export class SalesModule { }
