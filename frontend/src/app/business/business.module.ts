import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../theme/shared/shared.module';
import { BusinessRoutingModule } from './business-routing.module';
import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BusinessRoutingModule,
  ],
  declarations: [components]
})
export class BusinessModule { }
