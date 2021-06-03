import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [
    { id: 1, name: 'cdf', price: '12200' },
    { id: 2, name: 'Abc', price: '12000' },
    { id: 3, name: 'PQR', price: '14000' }];
  constructor() { }


  public getproducts(): Observable<Product[]> {
    return of(this.products);
  }

  public getproductsById(id: number): Observable<Product | any> {
    return of(this.products.find(h => h.id === id));
  }
}
