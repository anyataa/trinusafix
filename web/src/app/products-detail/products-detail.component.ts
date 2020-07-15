import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items, prod } from '../products.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../service/products/products.service'


@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
})
export class ProductsDetailComponent implements OnInit {
  
 product:prod = {
   name: "",
   description:"",
   image:"",
   specifications:[]
 };
 


  loginForm = new FormGroup({
    admin: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  productsForm = new FormGroup ({
    name: new FormControl ('', Validators.required),
    image : new FormControl ('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  data:any
  
  login = false;

  constructor(private ps : ProductsService) {}

  ngOnInit(): void { }

  onSubmit() {
    const data = this.loginForm.value;
    if (data.admin === 'admin' && data.password === 'password') {
      console.log('log in success!');
      this.login = true;
    }
  }

  
  onPost(prods:prod){ 
    prods = this.product
    console.log(prods)
   this.ps.addProduct(prods).subscribe(data => this.data=data) 
  }
}
