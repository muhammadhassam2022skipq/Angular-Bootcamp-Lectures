import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-list-product-item',
  templateUrl: './list-product-item.component.html',
  styleUrls: ['./list-product-item.component.css']
})
export class ListProductItemComponent implements OnInit {

  @Input('product') product: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

}
