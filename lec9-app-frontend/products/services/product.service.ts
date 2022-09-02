import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrlService } from 'src/app/common/api-url.service';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addProduct(model: Product): Observable<Product> {
    return this.httpClient.post<Product>(ApiUrlService.productAddUrl(), model);
  }

  updateProduct(model: Product): Observable<Product> {
    return this.httpClient.put<Product>(ApiUrlService.productAddUrl(), model);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.httpClient.delete<Product>(ApiUrlService.productDeleteUrl(id));
  }

  getProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(ApiUrlService.productGetUrl(id));
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(ApiUrlService.productGetAllUrl());
  }

  findProduct(filter: any): Observable<Array<Product>> {
    return this.httpClient.post<Array<Product>>(ApiUrlService.productFindUrl(), filter);
  }

}
