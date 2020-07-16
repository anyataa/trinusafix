import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items, prod, name } from '../../products.interface';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = 'http://45.64.99.144:9300/items';
  private changeUrl = 'http://45.64.99.144:9300/item'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Items> {
    return this.http.get<Items>(this.productsUrl);
  }

  getProduct(id: number): Observable<Items> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Items>(url);
  }
  
  addProduct(item:prod) {
    return this.http.post<any>(this.changeUrl,item, this.httpOptions)
  }

  deleteProduct(delprod:any){
    return this.http.request<any>('delete', this.changeUrl, {body:delprod})
  }
}
