import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items } from '../products.interface';
// import { ProductsService } from '../service/products/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
})
export class ProductsDetailComponent implements OnInit {
  data: Items['items'];
  loginForm = new FormGroup({
    admin: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  login = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const data = this.loginForm.value;
    if (data.admin === 'admin' && data.password === 'password') {
      console.log('log in success!');
      this.login = true;
    }
  }
}
