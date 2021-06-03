
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {
  
  public productList$: Observable<any>;

  constructor(
    private productsService: ProductsService,
  ) {
    this.productList$ = this.productsService.getproducts();
   }

  ngOnInit() {
  }

  


}
