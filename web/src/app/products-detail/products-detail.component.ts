import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items, prod, name } from '../products.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../service/products/products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
})
export class ProductsDetailComponent implements OnInit {
  product: prod = {
    name: '',
    description: '',
    image: '',
    specifications: [{ title: 'Product Details', detail: '' }],
  };

  productName: name = {
    name: '',
  };

  data: prod;

  loginForm = new FormGroup({
    admin: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  productsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  products: Items['items'];

  login = false;
  loginMessage = '';

  constructor(private ps: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onSubmit() {
    const data = this.loginForm.value;
    if (
      data.admin === 'trinusanetwork' &&
      data.password === 'wearethegreatest'
    ) {
      console.log('log in success!');
      this.login = true;
    } else {
      this.loginMessage = 'Wrong Password and Username';
      return this.loginMessage;
    }
  }

  onPost(prods: prod) {
    prods = this.product;
    console.log(prods);
    this.ps.addProduct(prods).subscribe((data) => (this.data = data));
  }

  getProducts() {
    console.log('get!', this.products);
    this.ps.getProducts().subscribe((items) => (this.products = items.items));
  }

  onDelete(name: string) {
    console.log(name);
    this.productName.name = name;
    console.log(this.productName);
    this.ps
      .deleteProduct(this.productName)
      .subscribe((data) => (this.data = data));
  }
}
