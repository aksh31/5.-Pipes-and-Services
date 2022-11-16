import { Component, OnInit } from '@angular/core';
import { Iproduct, IstatusObj } from './shared/modal/base';
import { SnakBarService } from './shared/services/snakbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Services';

  productsArray: Iproduct[] = [
    {
      name: 'iPad',
      details: 'Apple iPad Air 8GB-128GB',
      status: 'In Progress',
      id: '1'
    }
  ];

  constructor() {

  }
  ngOnInit(): void {

  }
  getObjProduct(obj: Iproduct) {
    this.productsArray.push(obj);
  }
  onStatusHandler(obj: IstatusObj) {
    this.productsArray.forEach(prod => {
      if (prod.id === obj.id) {
        prod.status = obj.arg;
      }
    })
  }
}
