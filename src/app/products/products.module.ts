import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListContainerComponent } from './product-list-container/product-list-container.component';
import { ProductListPresentationComponent } from './product-list-container/product-list-presentation/product-list-presentation.component';
import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductListContainerComponent,
    ProductListPresentationComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
