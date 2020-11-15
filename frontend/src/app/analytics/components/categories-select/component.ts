import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/popover/popover';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from '../../interfaces';

interface Result {
  data: Category[];
}

@Component({
  selector: 'app-categories-select',
  templateUrl: './component.html',
  // styleUrls: ['./component.scss']
})
export class CategoriesSelectComponent implements OnInit {

  @Output() select = new Subject<Category>();
  
  public selected: Category = {
    mcc: 5995,
    name: "Pet",
  };

  public categories$ = this.http.get<Result>('http://localhost:8000/categories').pipe(
    map(result => result.data)
  );

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.select.next(this.selected);
  }

  change(value: Category, popover: NgbPopover) {
    this.selected = value;

    this.select.next(this.selected);

    popover.close();
  }
}
