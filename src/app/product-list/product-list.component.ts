import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  minutes = 1;
  gender = 'male';

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
  male() { this.gender = 'male'; }
  female() { this.gender = 'female'; }
  other() { this.gender = 'other'; }

  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
}
