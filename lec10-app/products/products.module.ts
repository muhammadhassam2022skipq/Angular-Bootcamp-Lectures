import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from './services/product.service';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListProductItemComponent } from './list-products/list-product-item/list-product-item.component';
import { InterceptorService } from '../interceptors/interceptor.service';


@NgModule({
  declarations: [
    ListProductsComponent,
    ListProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    ProductService
  ]
})
export class ProductsModule { }
