import { Component, OnDestroy, OnInit } from '@angular/core';
import { flatMap, map, Subscription, switchMap } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit, OnDestroy {

  products: Array<Product> = [];
  getAllProductsSubscription!: Subscription;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllProductsSubscription = this.productService.getAllProducts().subscribe((products: Array<Product>) => {
      this.products = products;
    });
    // this.productService.getAllProducts().pipe(
    //   flatMap((prods: Array<Product>) => {
    //     return this.productService.findProduct({}).pipe(
    //       map((product: Array<Product>) => {
    //         return {
    //           allProducts: prods,
    //           findProducts: product
    //         }
    //       })
    //     )
    //   }),
    //   map((data: {allProducts: Array<Product>, findProducts: Array<Product>}) => {
    //     return {p: data.allProducts[0]};
    //   })
    // );
  }

  ngOnDestroy(): void {
      if(this.getAllProductsSubscription) {
        this.getAllProductsSubscription.unsubscribe();
      }
  }
}
