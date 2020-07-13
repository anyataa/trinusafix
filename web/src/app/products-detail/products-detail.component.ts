import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items } from '../products.interface';
// import { ProductsService } from '../service/products/products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
})
export class ProductsDetailComponent implements OnInit {
  @Input() product: Items;

  user: string = '';
  password: string = '';
  login = false;
  constructor() {}

  ngOnInit(): void {}

  loggingIn() {
    if (this.user === 'admin-trinusa' && this.password === 'password-trinusa') {
      this.login = true;
    }
  }
}
