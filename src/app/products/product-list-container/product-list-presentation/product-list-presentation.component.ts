import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductListPresenterService } from '../product-list-presenter/product-list-presenter.service';

@Component({
  selector: 'app-product-list-presentation',
  templateUrl: './product-list-presentation.component.html',
  styleUrls: ['./product-list-presentation.component.scss'],
  viewProviders: [ProductListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListPresentationComponent implements OnInit {

  // @Input() productList!: Product[];
  @Input() public set productList(value: Product[]) {
    if (value) {
      debugger
      this._productList = value;
    }
  }

  public get productList(): Product[] {
    return this._productList;
  }


  private _productList: Product[];

  constructor() {
    this._productList = [];
  }

  ngOnInit(): void {
  }

}

// let d = new ProductListPresentationComponent()
// d.productList = [];
