import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent, SalesComponent } from './components';
import { GoodsComponent } from './components/goods';
import { PricesComponent } from './components/prices';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sales',
      },
      {
        path: 'sales',
        component: SalesComponent,
      },
      {
        path: 'goods',
        component: GoodsComponent,
      },
      {
        path: 'prices',
        component: PricesComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
