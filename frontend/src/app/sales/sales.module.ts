import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../theme/shared/shared.module';
import { components } from './components';
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SalesRoutingModule,
  ],
  declarations: [components]
})
export class SalesModule { }
