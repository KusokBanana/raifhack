import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '../theme/shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClientsRoutingModule,
    HttpClientModule,
  ],
  declarations: [components]
})
export class ClientsModule { }
