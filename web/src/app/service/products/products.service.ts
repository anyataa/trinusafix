import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../../products.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = 'http://45.64.99.144:9300/items';

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
}
