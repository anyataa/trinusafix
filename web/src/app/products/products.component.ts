import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products/products.service';
import { Items } from '../products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Items['items'];
  details = false;
  // add navItem in navbar
  navItem = [
    ['/', 'About Us'],
    ['/', 'Products'],
    ['/', 'Service'],
    ['/', 'Contact'],
  ];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    console.log('get!', this.products);
    this.productsService
      .getProducts()
      .subscribe((items) => (this.products = items.items));
  }

  selectedProduct: Items;
  index: number;
  clicked(index: number) {
    this.index = index;
    this.selectedProduct = this.products[index];
    console.log(this.selectedProduct);
    this.details = true;
  }

  closeDetail() {
    this.details = false;
  }
}
