import { Component } from '@angular/core';

import { Category } from '../../interfaces';


@Component({
  selector: 'app-clients',
  templateUrl: './component.html',
//   styleUrls: ['./component.scss']
})
export class ClientsComponent {

  public category: Category;
  
  

  public setCategory(value: Category) {
    this.category = value;
  }

}
